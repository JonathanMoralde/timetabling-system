import { ref, readonly } from 'vue';
import axios from 'axios';
import { Schedule } from 'src/interface/interface';

const SetSchedule = ref<Schedule[]>([]);
const ScheduleData = readonly(SetSchedule);

// fetch schedules data based on active sem
const fetchSchedule = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_sched_active_sysem.php';

  await axios.get(url).then((response) => {
    SetSchedule.value = response.data.data;
  });
};

// insert schedule
const insertSchedule = async (
  instructorId: string,
  courseId: string,
  roomId: string,
  courseTypeId: string,
  programId: string,
  yearLevel: string,
  block: string,
  day: string,
  startTime: string,
  endTime: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/insert_schedule.php';

  const schedData = new FormData();
  schedData.append('instructorId', instructorId);
  schedData.append('courseId', courseId);
  schedData.append('block', block);
  schedData.append('roomId', roomId);
  schedData.append('programId', programId);
  schedData.append('courseTypeId', courseTypeId);
  schedData.append('day', day);
  schedData.append('startTime', startTime);
  schedData.append('yearLevel', yearLevel);
  schedData.append('endTime', endTime);

  try {
    const response = await axios.post(url, schedData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      maxBodyLength: Infinity,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

// Fetch indiv schedule
const fetchIndivSchedule = async (scheduleId: string) => {
  const url = `http://localhost/timetable-system-backend/api/admin/managedata/fetch_indiv_schedule.php?scheduleId=${scheduleId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

// Edit indiv schedule data
const updateSchedule = async (
  scheduleId: string,
  instructorId: string,
  courseId: string,
  roomId: string,
  courseTypeId: string,
  programId: string,
  yearLevel: string,
  block: string,
  day: string,
  startTime: string,
  endTime: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/update_schedule.php';

  const schedData = new FormData();
  schedData.append('scheduleId', scheduleId);
  schedData.append('instructorId', instructorId);
  schedData.append('courseId', courseId);
  schedData.append('block', block);
  schedData.append('roomId', roomId);
  schedData.append('programId', programId);
  schedData.append('courseTypeId', courseTypeId);
  schedData.append('day', day);
  schedData.append('startTime', startTime);
  schedData.append('yearLevel', yearLevel);
  schedData.append('endTime', endTime);

  try {
    const response = await axios.post(url, schedData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      maxBodyLength: Infinity,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete schedule
const deleteSchedule = async (scheduleId: string) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/delete_schedule.php';

  const schedData = new FormData();
  schedData.append('scheduleId', scheduleId);

  try {
    const response = await axios.post(url, schedData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      maxBodyLength: Infinity,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export {
  SetSchedule,
  ScheduleData,
  fetchSchedule,
  insertSchedule,
  fetchIndivSchedule,
  updateSchedule,
  deleteSchedule,
};
