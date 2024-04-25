import { QTableProps } from 'quasar';
import { ProgramData, fetchProgram } from 'src/composables/Program';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchProgram();
    });

    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      return ProgramData.value || [];
    });

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'program_name',
        required: true,
        label: 'Program Name',
        align: 'center',
        field: 'program_name',
        sortable: true,
      },
      {
        name: 'abbreviation',
        align: 'center',
        label: 'Abbreviation',
        field: 'abbreviation',
      },
      {
        name: 'department_name',
        align: 'center',
        label: 'Department',
        field: 'department_name',
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
