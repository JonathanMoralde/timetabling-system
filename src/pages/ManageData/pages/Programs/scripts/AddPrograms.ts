import { useQuasar } from 'quasar';
import { DepartmentData, fetchDepartment } from 'src/composables/Department';
import {
  fetchIndivProgram,
  insertProgram,
  updateProgram,
} from 'src/composables/Program';
import { defineComponent, ref, onBeforeMount, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchDepartment();

      if (route.params.programId) {
        const id: string = Array.isArray(route.params.programId)
          ? route.params.programId[0]
          : route.params.programId;
        console.log(id);

        fetchIndivProgram(id).then((response) => {
          // console.log(response);
          selectedDepartment.value = response.data[0].department_id;
          programName.value = response.data[0].program_name;
          abbreviation.value = response.data[0].abbreviation;
        });
      }
    });
    const $q = useQuasar();
    const route = useRoute();
    const router = useRouter();
    const btnLoadingState = ref<boolean>(false);

    const programName = ref('');
    const abbreviation = ref('');

    const selectedDepartment = ref<number | null>(null);
    const departmentOptions = computed(() => {
      const tempData = DepartmentData.value.map((department) => {
        return {
          label: department.department_name,
          value: department.department_id,
          description: department.department_name,
        };
      });
      console.log(tempData);

      return tempData || [];
    });

    const handleSubmit = () => {
      btnLoadingState.value = true;
      insertProgram(
        programName.value,
        abbreviation.value,
        selectedDepartment.value!.toString()
      )
        .then((response) => {
          console.log(response);
          $q.notify({
            message: response.data.message,
            position: 'bottom',
            color: 'positive',
            textColor: 'accent',
          });

          selectedDepartment.value = null;
          programName.value = '';
          abbreviation.value = '';

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
    };

    const handleEdit = () => {
      btnLoadingState.value = true;

      const id: string = Array.isArray(route.params.programId)
        ? route.params.programId[0]
        : route.params.programId;

      try {
        console.log(
          id,
          selectedDepartment.value,
          programName.value,
          abbreviation.value
        );
        updateProgram(
          id,
          programName.value,
          abbreviation.value,
          selectedDepartment.value!.toString()
        )
          .then((response) => {
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
      programName,
      abbreviation,
      selectedDepartment,
      departmentOptions,
      handleSubmit,
      handleEdit,
    };
  },
});
