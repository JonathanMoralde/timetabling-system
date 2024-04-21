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
        name: 'course_type',
        required: true,
        label: 'Course Type',
        align: 'left',
        field: 'course_type',
        sortable: true,
      },
      {
        name: 'duration',
        align: 'left',
        label: 'Duration',
        field: 'duration',
      },
      {
        name: 'lecture_unit',
        align: 'center',
        label: 'Lecture Unit',
        field: 'lecture_unit',
      },
      {
        name: 'laboratory_unit',
        align: 'right',
        label: 'Price/Downpayment',
        field: 'laboratory_unit',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },

      {
        name: 'load unit',
        align: 'left',
        label: 'Load Unit',
        field: 'load unit',
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
