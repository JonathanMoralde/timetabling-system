import { defineComponent, ref, onBeforeMount, computed } from 'vue';
import {
  deleteDepartment,
  fetchIndivDepartment,
  insertDepartment,
  updateDepartment,
} from 'src/composables/Department';
import { useQuasar } from 'quasar';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const btnLoadingState = ref<boolean>(false);
    const route = useRoute();
    const router = useRouter();

    const shouldEdit = computed(() => {
      return !!route.params.departmentId;
    });

    const departmentName = ref<string>('');
    const deanName = ref<string>('');

    // For submit
    const handleSubmit = () => {
      btnLoadingState.value = true;
      insertDepartment(departmentName.value, deanName.value)
        .then((response) => {
          console.log(response);
          $q.notify({
            message: response.message,
            position: 'bottom',
            color: 'positive',
            textColor: 'accent',
          });

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

    // for edit
    const handleEdit = () => {
      btnLoadingState.value = true;
      console.log('clicked edit');
      const id: string = Array.isArray(route.params.departmentId)
        ? route.params.departmentId[0]
        : route.params.departmentId;

      updateDepartment(id, departmentName.value, deanName.value)
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
    };

    onBeforeMount(() => {
      if (route.params.departmentId) {
        const id: string = Array.isArray(route.params.departmentId)
          ? route.params.departmentId[0]
          : route.params.departmentId;
        fetchIndivDepartment(id).then((response) => {
          console.log(response);
          departmentName.value = response.data[0].department_name;
          deanName.value = response.data[0].dean;
        });
      }
    });

    return {
      departmentName,
      deanName,
      shouldEdit,
      handleSubmit,
      handleEdit,
      btnLoadingState,
    };
  },
});
