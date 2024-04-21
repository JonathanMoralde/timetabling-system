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
        name: 'student_id',
        required: true,
        label: 'Student ID',
        align: 'left',
        field: 'student_id',
        sortable: true,
      },
      {
        name: 'student_name',
        align: 'left',
        label: 'Student Name',
        field: 'student_name',
      },
      {
        name: 'program',
        align: 'center',
        label: 'Program',
        field: 'program',
      },
      {
        name: 'year_level',
        align: 'right',
        label: 'Year Level',
        field: 'year_level',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },

      {
        name: 'block',
        align: 'left',
        label: 'Block',
        field: 'block',
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
