import { useQuasar } from 'quasar';
import {
  fetchIndivCurriculum,
  insertCurriculum,
  updateCurriculum,
} from 'src/composables/Curriculum';
import { ProgramData, fetchProgram } from 'src/composables/Program';
import { defineComponent, ref, onBeforeMount, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchProgram();
      if (route.params.curriculumId) {
        const id: string = Array.isArray(route.params.curriculumId)
          ? route.params.curriculumId[0]
          : route.params.curriculumId;
        fetchIndivCurriculum(id).then((response) => {
          selectedProgram.value = response.data[0].program_id;
          selectedYear.value = response.data[0].year_effectivity;
        });
      }
    });

    const $q = useQuasar();
    const route = useRoute();
    const router = useRouter();
    const btnLoadingState = ref<boolean>(false);

    const selectedProgram = ref<number | null>(null);
    const programOptions = computed(() => {
      const tempData = ProgramData.value.map((program) => {
        return {
          label: program.abbreviation,
          value: program.program_id,
          description: program.program_name,
        };
      });
      console.log(tempData);

      return tempData || [];
    });

    const selectedYear = ref<string>('');
    const yearOptions: Array<string> = [
      '2010',
      '2011',
      '2012',
      '2013',
      '2014',
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
      '2023',
      '2024',
      '2025',
      '2026',
      '2027',
      '2028',
      '2029',
      '2030',
    ];

    const handleSubmit = () => {
      btnLoadingState.value = true;

      try {
        insertCurriculum(selectedProgram.value!.toString(), selectedYear.value)
          .then((response) => {
            console.log(response);
            $q.notify({
              message: response.data.message,
              position: 'bottom',
              color: 'positive',
              textColor: 'accent',
            });

            selectedProgram.value = null;
            selectedYear.value = '';

            btnLoadingState.value = false;
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
            btnLoadingState.value = false;
          });
      } catch (error) {
        throw error;
      }
    };

    const handleEdit = () => {
      btnLoadingState.value = true;
      const id: string = Array.isArray(route.params.curriculumId)
        ? route.params.curriculumId[0]
        : route.params.curriculumId;

      try {
        updateCurriculum(
          id,
          selectedProgram.value!.toString(),
          selectedYear.value
        )
          .then((response) => {
            console.log(response);
            $q.notify({
              message: response.message,
              position: 'bottom',
              color: 'positive',
              textColor: 'accent',
            });

            router.go(-1);

            btnLoadingState.value = false;
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
            btnLoadingState.value = false;
          });
      } catch (error) {
        throw error;
      }
    };
    return {
      selectedProgram,
      programOptions,
      selectedYear,
      yearOptions,
      handleSubmit,
      handleEdit,
      btnLoadingState,
    };
  },
});
