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
        name: 'curriculum_program',
        required: true,
        label: 'Curriculum Program',
        align: 'left',
        field: 'curriculum_program',
        sortable: true,
      },
      {
        name: 'year_effectivity',
        align: 'left',
        label: 'Year Effectivity',
        field: 'year_effectivity',
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
