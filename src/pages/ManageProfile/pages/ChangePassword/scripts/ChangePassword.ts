import { useQuasar } from 'quasar';
import { updatePassword } from 'src/composables/Admin';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const btnLoadingState = ref<boolean>(false);

    const currentPassword = ref<string>('');
    const newPassword = ref<string>('');
    const confirmPassword = ref<string>('');

    const handleSubmit = () => {
      btnLoadingState.value = true;

      if (newPassword.value !== confirmPassword.value) {
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
        updatePassword(currentPassword.value, newPassword.value)
          .then((response) => {
            console.log(response);
            $q.notify({
              message: response.data.message,
              position: 'bottom',
              color: 'positive',
              textColor: 'accent',
            });

            currentPassword.value = '';
            newPassword.value = '';
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
      currentPassword,
      newPassword,
      confirmPassword,
      handleSubmit,
      btnLoadingState,
    };
  },
});
