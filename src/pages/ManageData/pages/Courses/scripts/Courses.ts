import { QTableProps } from 'quasar';
import { CourseData, fetchCourse } from 'src/composables/Course';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchCourse();
    });

    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      return CourseData.value || [];
    });

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'course_code',
        required: true,
        label: 'Course Code',
        align: 'center',
        field: 'course_code',
        sortable: true,
      },
      {
        name: 'course_name',
        align: 'center',
        label: 'Course Name',
        field: 'course_name',
      },
      {
        name: 'course_type',
        align: 'center',
        label: 'Course Type',
        field: 'course_type',
      },
      {
        name: 'year_effectivity',
        align: 'center',
        label: 'Curriculum',
        field: 'year_effectivity',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },

      {
        name: 'year_level',
        align: 'center',
        label: 'Year Level',
        field: 'year_level',
      },
      {
        name: 'semester',
        align: 'center',
        label: 'Semester',
        field: 'semester',
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
