import { QTableProps, useQuasar } from 'quasar';
import {
  ProgramData,
  deleteProgram,
  fetchProgram,
} from 'src/composables/Program';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchProgram();
    });

    const $q = useQuasar();

    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      const programs = ProgramData.value || [];
      const searchTerm = text.value.toLocaleLowerCase();

      return programs.filter((program) => {
        const programName =
          program.program_name && program.program_name.toLocaleLowerCase();
        const abbreviation =
          program.abbreviation && program.abbreviation.toLocaleLowerCase();
        const departmentName =
          program.department_name &&
          program.department_name.toLocaleLowerCase();
        return (
          programName.includes(searchTerm) ||
          abbreviation.includes(searchTerm) ||
          departmentName.includes(searchTerm)
        );
      });
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

    const handleDel = (programId: string) => {
      deleteProgram(programId)
        .then((response) => {
          $q.notify({
            message: response.data.message,
            position: 'bottom',
            color: 'positive',
            textColor: 'accent',
          });

          fetchProgram();
        })
        .catch((error) => {
          console.log(error);

          $q.notify({
            type: 'negative',
            message: error.message,
            position: 'bottom',
            color: 'negative',
            textColor: 'accent',
          });
        });
    };
    return { text, selected, options, rows, columns, handleDel };
  },
});
