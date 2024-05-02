import { QTableProps, useQuasar } from 'quasar';
import {
  CurriculumData,
  deleteCurriculum,
  fetchCurriculum,
} from 'src/composables/Curriculum';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchCurriculum();
    });

    const $q = useQuasar();

    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      const curriculums = CurriculumData.value || [];
      const searchTerm = text.value.toLocaleLowerCase();

      return curriculums.filter((curriculum) => {
        const programName =
          curriculum.program_name &&
          curriculum.program_name.toLocaleLowerCase();
        const yearEffectivity =
          curriculum.year_effectivity &&
          curriculum.year_effectivity.toLocaleLowerCase();

        return (
          programName.includes(searchTerm) ||
          yearEffectivity.includes(searchTerm)
        );
      });
    });

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'program_name',
        required: true,
        label: 'Curriculum Program',
        align: 'left',
        field: 'program_name',
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
        align: 'center',
        label: '',
        field: 'action',
        style: 'width: 10%',
      },
    ];

    const handleDel = (curriculumId: string) => {
      deleteCurriculum(curriculumId)
        .then((response) => {
          console.log(response);
          $q.notify({
            message: response.data.message,
            position: 'bottom',
            color: 'positive',
            textColor: 'accent',
          });

          fetchCurriculum();
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
