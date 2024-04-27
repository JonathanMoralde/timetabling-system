import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useQuasar } from 'quasar';

export default defineComponent({
  setup() {
    const $q = useQuasar();

    const btnLoadingState = ref<boolean>(false);
    const email = ref<string>('');

    const handleSubmit = async () => {
      btnLoadingState.value = true;
      const userData = new FormData();
      userData.append('email', email.value);
      const url =
        'http://localhost/timetable-system-backend/api/users/forgot_password.php';

      await axios
        .post(url, userData, {
          headers: { 'Content-Type': 'multipart/form-data' },
          maxBodyLength: Infinity,
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);

          $q.notify({
            message: response.data.data,
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
            message: error.response.data.data,
            position: 'bottom',
            color: 'negative',
            textColor: 'accent',
          });
          btnLoadingState.value = false;
        });
    };
    return { email, handleSubmit, btnLoadingState };
  },
});
