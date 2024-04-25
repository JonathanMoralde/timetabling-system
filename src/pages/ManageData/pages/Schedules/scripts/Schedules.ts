import { QTableProps } from 'quasar';
import { ScheduleData, fetchSchedule } from 'src/composables/Schedule';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchSchedule();
    });

    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      const tempData = ScheduleData.value;
      return (
        tempData.map((schedule) => {
          return {
            schedule_id: schedule.schedule_id,
            instructor_id: schedule.instructor_id,
            course_id: schedule.course_id,
            room_id: schedule.room_id,
            course_type_id: schedule.course_type_id,
            program_id: schedule.program_id,
            day: schedule.day,
            time: `${schedule.start_time} - ${schedule.end_time}`,
            school_year_semester_id: schedule.school_year_semester_id,
            instructor_name: `${schedule.surname}, ${schedule.first_name} ${schedule.middle_name}`,
            course: `${schedule.course_code} - ${schedule.course_name}`,
            room_name: schedule.room_name,
            course_type: schedule.course_type,
            class: `${schedule.abbreviation}${schedule.year_level}${schedule.block}`,
            school_year: schedule.school_year,
            term: schedule.term,
          };
        }) || []
      );
    });

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'instructor_name',
        required: true,
        label: 'Instructor',
        align: 'center',
        field: 'instructor_name',
        sortable: true,
      },
      {
        name: 'course',
        align: 'center',
        label: 'Course',
        field: 'course',
      },
      {
        name: 'room_name',
        align: 'center',
        label: 'Room',
        field: 'room_name',
      },
      {
        name: 'course_type',
        align: 'center',
        label: 'Type',
        field: 'course_type',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },

      {
        name: 'class',
        align: 'center',
        label: 'Class',
        field: 'class',
      },
      {
        name: 'day',
        align: 'center',
        label: 'Day',
        field: 'day',
      },
      {
        name: 'time',
        align: 'center',
        label: 'Time',
        field: 'time',
      },
      {
        name: 'action',
        align: 'left',
        label: '',
        field: 'action',
        style: 'width: 10%',
      },
    ];
    return { text, selected, options, rows, columns };
  },
});
