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
        align: 'left',
        label: 'Course Name',
        field: 'course_name',
      },
      {
        name: 'time',
        align: 'center',
        label: 'Time',
        field: 'time',
      },
      {
        name: 'day',
        align: 'center',
        label: 'Day',
        field: 'day',
      },
      {
        name: 'room',
        align: 'right',
        label: 'Room',
        field: 'room',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },
      {
        name: 'credit_units',
        align: 'right',
        label: 'Credit Units',
        field: 'credit_units',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },
      {
        name: 'load_unit',
        align: 'right',
        label: 'Load Units',
        field: 'load_unit',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },
      {
        name: 'class',
        align: 'right',
        label: 'Class',
        field: 'class',
        // format: (val) => `₱ ${val.toLocaleString()}`,
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
