import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const route = useRoute();
    const btnLoadingState = ref<boolean>(false);

    const newPassword = ref<string>('');
    const confirmPassword = ref<string>('');

    const handleSubmit = async () => {
      btnLoadingState.value = true;
      if (newPassword.value !== confirmPassword.value) {
        $q.notify({
          type: 'negative',
          message: 'Password does not match!',
          position: 'bottom',
          color: 'negative',
          textColor: 'accent',
        });
        btnLoadingState.value = false;
        return;
      }

      const token: string = Array.isArray(route.params.token)
        ? route.params.token[0]
        : route.params.token;
      const email: string = Array.isArray(route.params.email)
        ? route.params.email[0]
        : route.params.email;

      const userData = new FormData();
      userData.append('email', email);
      userData.append('newPassword', newPassword.value);
      userData.append('passwordToken', token);

      const url: string =
        'http://localhost/timetable-system-backend/api/users/reset_password.php';

      await axios
        .post(url, userData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          withCredentials: true,
          maxBodyLength: Infinity,
        })
        .then((response) => {
          console.log(response);

          $q.notify({
            message: response.data.message,
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
            message: error.response.data.error,
            position: 'bottom',
            color: 'negative',
            textColor: 'accent',
          });
          btnLoadingState.value = false;
        });
    };
    return { newPassword, confirmPassword, handleSubmit, btnLoadingState };
  },
});
