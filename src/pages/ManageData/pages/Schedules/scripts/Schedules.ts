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
        name: 'instructor',
        required: true,
        label: 'Instructor',
        align: 'left',
        field: 'instructor',
        sortable: true,
      },
      {
        name: 'course',
        align: 'left',
        label: 'Course',
        field: 'course',
      },
      {
        name: 'room',
        align: 'center',
        label: 'Room',
        field: 'room',
      },
      {
        name: 'type',
        align: 'right',
        label: 'Type',
        field: 'type',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },

      {
        name: 'class',
        align: 'left',
        label: 'Class',
        field: 'class',
      },
      // {
      //   name: 'year_level',
      //   align: 'left',
      //   label: 'Yr Level',
      //   field: 'year_level',
      // },
      // {
      //   name: 'block',
      //   align: 'left',
      //   label: 'Block',
      //   field: 'block',
      // },
      {
        name: 'day',
        align: 'left',
        label: 'Day',
        field: 'day',
      },
      {
        name: 'time',
        align: 'left',
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
