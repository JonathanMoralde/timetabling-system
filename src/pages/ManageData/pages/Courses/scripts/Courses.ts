import { QTableProps } from 'quasar';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = ref([]);

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'course_code',
        required: true,
        label: 'Course Code',
        align: 'left',
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
        align: 'left',
        label: 'Course Type',
        field: 'course_type',
      },
      {
        name: 'curriculum',
        align: 'right',
        label: 'Curriculum',
        field: 'curriculum',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },

      {
        name: 'year_level',
        align: 'left',
        label: 'Year Level',
        field: 'year_level',
      },
      {
        name: 'semester',
        align: 'left',
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
