import { useQuasar } from 'quasar';
import { insertAdmin } from 'src/composables/Admin';
import { DepartmentData, fetchDepartment } from 'src/composables/Department';
import { defineComponent, ref, onBeforeMount, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchDepartment();
    });

    const $q = useQuasar();
    const route = useRoute();
    const router = useRouter();
    const btnLoadingState = ref<boolean>(false);

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
    const positionProgram = ref<string | undefined>();
    const title = ref<string | undefined>();
    const firstName = ref<string>('');
    const middleName = ref<string>('');
    const surName = ref<string>('');
    const email = ref<string>('');
    const password = ref<string>('');
    const confirmPassword = ref<string>('');

    const handleSubmit = () => {
      btnLoadingState.value = true;

      if (password.value !== confirmPassword.value) {
        $q.notify({
          type: 'negative',
          message: 'Password did not match!',
          position: 'bottom',
          color: 'negative',
          textColor: 'accent',
        });
        return;
      }
      try {
        insertAdmin(
          firstName.value,
          middleName.value,
          surName.value,
          email.value,
          password.value,
          selectedDepartment.value
            ? selectedDepartment.value!.toString()
            : null,
          title.value,
          positionProgram.value
        )
          .then((response) => {
            console.log(response);
            $q.notify({
              message: response.data.message,
              position: 'bottom',
              color: 'positive',
              textColor: 'accent',
            });

            positionProgram.value = undefined;
            selectedDepartment.value = null;
            title.value = undefined;
            firstName.value = '';
            middleName.value = '';
            surName.value = '';
            email.value = '';
            password.value = '';
            confirmPassword.value = '';

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
      selectedDepartment,
      departmentOptions,
      positionProgram,
      title,
      firstName,
      middleName,
      surName,
      email,
      password,
      confirmPassword,
      handleSubmit,
      btnLoadingState,
    };
  },
});
