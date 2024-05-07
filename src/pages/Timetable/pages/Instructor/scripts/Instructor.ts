import { QTableColumn, useQuasar } from 'quasar';
import { InstructorData, fetchInstructor } from 'src/composables/Instructor';
import { defineComponent, ref, onBeforeMount, computed } from 'vue';
import { ScheduleData, SetSchedule } from 'src/composables/Schedule';
import {
  fetchInstructorSched,
  times,
  daysOfWeek,
  spanTrack,
  calculateRowspan,
  checkSpanTrack,
  checkColor,
  resetSpanTrack,
} from 'src/composables/Timetable';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchInstructor();
      SetSchedule.value = [];
      resetSpanTrack();
    });

    const $q = useQuasar();

    const text = ref<string>('');
    const selectedInstructor = ref<number | null>();
    const instructorOptions = computed(() => {
      const tempData = InstructorData.value || [];

      return tempData.map((instructor) => {
        return {
          label: `${instructor.surname}, ${instructor.first_name} ${instructor.middle_name}`,
          value: instructor.instructor_id,
          description: instructor.department_name,
        };
      });
    });

    const columns: QTableColumn[] = [
      {
        name: 'timeSlot',
        label: 'Time',
        field: 'time_slot',
        align: 'center',
      },
      ...daysOfWeek.map(
        (day): QTableColumn => ({
          name: day,
          label: day,
          field: day,
          align: 'center',
        })
      ),
    ];

    const displaySched = (time: string, day: string) => {
      let scheduleContent = ''; // Initialize an empty string to accumulate HTML content
      const startTime = time.split(' - ')[0];

      if (ScheduleData.value) {
        console.log(ScheduleData.value);
        ScheduleData.value.forEach((sched) => {
          if (sched.start_time === startTime && sched.day === day) {
            scheduleContent += `
              <p class='q-mb-none'>${sched.course_code} (${sched.course_type})</p>
              <p class='q-mb-none text-italic text-caption'>${sched.abbreviation} - ${sched.year_level}${sched.block}</p>
              <p class='q-mb-none text-caption'>${sched.room_name}</p>
            `;
          }
        });
      }

      return scheduleContent; // Return the accumulated HTML content
    };

    const handleUpdate = (value: string) => {
      // Start notif loading here
      // notif;
      $q.notify({
        type: 'ongoing',
        group: 'loading',
        timeout: 1000, // we want to be in control when it gets dismissed
        spinner: true,
        message: 'Fetching Schedule...',
        textColor: 'accent',
      });

      fetchInstructorSched(value)
        .then(() => {
          // End notif loading after successful fetch
          $q.notify({
            // group: 'loading',
            icon: 'done', // we add an icon
            spinner: false, // we reset the spinner setting so the icon can be displayed
            message: 'Fetching done!',
            color: 'positive',
            timeout: 2500, // we will timeout it in 2.5s
          });
        })
        .catch((error) => {
          $q.notify({
            type: 'negative',
            message: error.message,
            position: 'bottom',
            color: 'negative',
            textColor: 'accent',
          });
        });
    };
    return {
      times,
      daysOfWeek,
      text,
      selectedInstructor,
      instructorOptions,
      columns,
      fetchInstructorSched,
      spanTrack,
      calculateRowspan,
      ScheduleData,
      displaySched,
      checkSpanTrack,
      checkColor,
      handleUpdate,
    };
  },
});
