import { QTableProps } from 'quasar';
import { CourseTypeData, fetchCourseType } from 'src/composables/CourseType';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchCourseType();
    });

    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      return CourseTypeData.value || [];
    });

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'course_type',
        required: true,
        label: 'Course Type',
        align: 'center',
        field: 'course_type',
        sortable: true,
      },
      {
        name: 'duration',
        align: 'center',
        label: 'Duration',
        field: 'duration',
      },
      {
        name: 'lec_unit',
        align: 'center',
        label: 'Lecture Unit',
        field: 'lec_unit',
      },
      {
        name: 'lab_unit',
        align: 'center',
        label: 'Laboratory Unit',
        field: 'lab_unit',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },

      {
        name: 'load_unit',
        align: 'center',
        label: 'Load Unit',
        field: 'load_unit',
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
