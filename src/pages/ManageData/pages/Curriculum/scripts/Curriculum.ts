import { QTableProps } from 'quasar';
import { CurriculumData, fetchCurriculum } from 'src/composables/Curriculum';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchCurriculum();
    });

    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      return CurriculumData.value || [];
    });

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'program_name',
        required: true,
        label: 'Curriculum Program',
        align: 'center',
        field: 'program_name',
        sortable: true,
      },
      {
        name: 'year_effectivity',
        align: 'center',
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
