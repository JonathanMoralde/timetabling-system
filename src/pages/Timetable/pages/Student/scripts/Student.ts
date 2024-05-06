import { QTableColumn, useQuasar } from 'quasar';
import { InstructorData, fetchInstructor } from 'src/composables/Instructor';
import { defineComponent, ref, onBeforeMount, computed } from 'vue';
import { ScheduleData, SetSchedule } from 'src/composables/Schedule';
import {
  times,
  daysOfWeek,
  spanTrack,
  calculateRowspan,
  checkSpanTrack,
  checkColor,
  resetSpanTrack,
  fetchClassSched,
} from 'src/composables/Timetable';
import { ProgramData, fetchProgram } from 'src/composables/Program';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchProgram();
      SetSchedule.value = [];
      resetSpanTrack();
    });

    const $q = useQuasar();

    const text = ref<string>('');
    const selectedProgram = ref<number | null>();
    const programOptions = computed(() => {
      const tempData = ProgramData.value || [];

      return tempData.map((program) => {
        return {
          label: program.abbreviation,
          value: program.program_id,
          description: program.program_name,
        };
      });
    });

    const selectedYearLevel = ref<number>();
    const yearLevelOptions: number[] = [1, 2, 3, 4, 5];

    const selectedBlock = ref<string>('');
    const blockOptions: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
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
              <p class='q-mb-none'>${sched.room_name}</p>
              <p class='q-mb-none'>${sched.surname}, ${sched.first_name} ${sched.middle_name[0]}.</p>
            `;
          }
        });
      }

      return scheduleContent; // Return the accumulated HTML content
    };

    const handleUpdate = () => {
      if (
        !selectedProgram.value ||
        !selectedYearLevel.value ||
        !selectedBlock.value
      ) {
        return;
      }
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

      fetchClassSched(
        selectedProgram.value!.toString(),
        selectedYearLevel.value!.toString(),
        selectedBlock.value
      )
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
      selectedProgram,
      programOptions,
      columns,
      spanTrack,
      calculateRowspan,
      ScheduleData,
      displaySched,
      checkSpanTrack,
      checkColor,
      selectedYearLevel,
      yearLevelOptions,
      selectedBlock,
      blockOptions,
      handleUpdate,
    };
  },
});
