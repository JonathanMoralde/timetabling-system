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
        name: 'program_name',
        required: true,
        label: 'Program Name',
        align: 'left',
        field: 'program_name',
        sortable: true,
      },
      {
        name: 'abbreviation',
        align: 'left',
        label: 'Abbreviation',
        field: 'abbreviation',
      },
      {
        name: 'department',
        align: 'center',
        label: 'Department',
        field: 'department',
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
