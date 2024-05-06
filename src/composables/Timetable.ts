import { useQuasar } from 'quasar';
import { ScheduleData, SetSchedule } from './Schedule';
import { SpanTrack } from 'src/interface/interface';
import axios from 'axios';

// fetch all instructor sched on current active sem
const fetchInstructorSched = async (instructorId: string) => {
  const url = `http://localhost/timetable-system-backend/api/admin/timetables/fetch_instructor_sched.php?instructorId=${instructorId}`;

  try {
    await axios
      .get(url, {
        withCredentials: true,
      })
      .then((response) => {
        SetSchedule.value = response.data.data;
      });
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

// fetch selected class sched on current active sem
const fetchClassSched = async (
  programId: string,
  yearLevel: string,
  block: string
) => {
  const url = `http://localhost/timetable-system-backend/api/admin/timetables/fetch_class_sched.php?programId=${programId}&yearLevel=${yearLevel}&block=${block}`;

  try {
    await axios
      .get(url, {
        withCredentials: true,
      })
      .then((response) => {
        SetSchedule.value = response.data.data;
      });
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

// fetch selected room sched on current active sem
const fetchRoomSched = async (roomId: string) => {
  const url = `http://localhost/timetable-system-backend/api/admin/timetables/fetch_room_sched.php?roomId=${roomId}}`;

  try {
    await axios
      .get(url, {
        withCredentials: true,
      })
      .then((response) => {
        SetSchedule.value = response.data.data;
      });
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

const times: string[] = [
  '07:00 AM - 07:30 AM',
  '07:30 AM - 08:00 AM',
  '08:00 AM - 08:30 AM',
  '08:30 AM - 09:00 AM',
  '09:00 AM - 09:30 AM',
  '09:30 AM - 10:00 AM',
  '10:00 AM - 10:30 AM',
  '10:30 AM - 11:00 AM',
  '11:00 AM - 11:30 AM',
  '11:30 AM - 12:00 PM',
  '12:00 PM - 12:30 PM',
  '12:30 PM - 01:00 PM',
  '01:00 PM - 01:30 PM',
  '01:30 PM - 02:00 PM',
  '02:00 PM - 02:30 PM',
  '02:30 PM - 03:00 PM',
  '03:00 PM - 03:30 PM',
  '03:30 PM - 04:00 PM',
  '04:00 PM - 04:30 PM',
  '04:30 PM - 05:00 PM',
  '05:00 PM - 05:30 PM',
  '05:30 PM - 06:00 PM',
  '06:00 PM - 06:30 PM',
  '06:30 PM - 07:00 PM',
  '07:00 PM - 07:30 PM',
  '07:30 PM - 08:00 PM',
];

const daysOfWeek: string[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const spanTrack: SpanTrack = {
  Monday: 0,
  Tuesday: 0,
  Wednesday: 0,
  Thursday: 0,
  Friday: 0,
  Saturday: 0,
  Sunday: 0,
};

const resetSpanTrack = () => {
  daysOfWeek.forEach((day) => {
    spanTrack[day] = 0;
  });
};

const calculateRowspan = (time: string, day: string) => {
  let rowSpan = 1;
  const startTime = time.split(' - ')[0];

  if (ScheduleData.value) {
    ScheduleData.value.forEach((sched) => {
      if (sched.start_time === startTime && sched.day === day) {
        // get the index of start time
        const start = times.indexOf(time);

        // get the full end time for use in finding index
        const endTimeFull = times.filter((t) => {
          const tempEndTime = t.split(' - ')[1];

          return tempEndTime === sched.end_time;
        });

        // use the filtered end time to get the index
        const end = times.indexOf(endTimeFull[0]);

        // calculate the rowspan now that we have the value of both indexes
        console.log(end - start);

        rowSpan = end - start + 1;

        spanTrack[day] += rowSpan - 1;
      }
    });
  }
  return rowSpan;
};

// check if the <td> will be displayed or not based on spanTrack to prevent overflow cells in the table
const checkSpanTrack = (time: string, day: string) => {
  let isRender = true;

  if (ScheduleData.value) {
    if (spanTrack[day] > 0) {
      isRender = false;
      spanTrack[day]--;
    }
  }

  return isRender;
};

// const colorTimetable: string[] = [
//   'bg-orange-4',
//   'light-green-4',
//   'deep-purple-3',
//   'pink-3',
//   'pink-2',
//   'teal-2',
//   'light-blue-3',
//   'green-3',
//   'purple-3',
//   'red-3',
//   'cyan-3',
//   'indigo-3',
//   'lime-3',
// ];

const checkColor = (time: string, day: string) => {
  const startTime = time.split(' - ')[0];
  let tdClass = '';
  const $q = useQuasar();

  if (ScheduleData.value) {
    ScheduleData.value.forEach((sched) => {
      if (sched.start_time === startTime && sched.day === day) {
        tdClass += 'bg-orange-4 borderedCell';
        tdClass += $q.dark.isActive ? ' text-primary' : '';
      }
    });
  }

  return tdClass;
};

export {
  fetchInstructorSched,
  fetchClassSched,
  fetchRoomSched,
  times,
  daysOfWeek,
  spanTrack,
  calculateRowspan,
  checkSpanTrack,
  checkColor,
  resetSpanTrack,
};
