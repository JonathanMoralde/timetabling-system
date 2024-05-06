import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const btnLoadingState = ref<boolean>(false);
    const email = ref<string>('');
    const password = ref<string>('');
    const isRemember = ref<boolean>(false);

    const handleSubmit = async () => {
      btnLoadingState.value = true;

      let userData = new FormData();
      userData.append('email', email.value);
      userData.append('password', password.value);
      if (isRemember) {
        userData.append('remember_me', isRemember.value.toString());
      }

      const url =
        'http://localhost/timetable-system-backend/api/users/sign_in.php';

      // try {
      await axios
        .post(url, userData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          maxBodyLength: Infinity,
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          if (
            response.status === 200 &&
            response.data &&
            response.data.message === 'Successfully logged in'
          ) {
            console.log(response);
            $q.notify({
              message: response.data.message,
              position: 'bottom',
              color: 'positive',
              textColor: 'accent',
            });

            if (response.data.type === 'admin') {
              router.push({ name: 'subject-load' });
            }
            btnLoadingState.value = false;
          }
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
      // } catch (error) {
      //   console.log(error);
      //   // $q.notify({
      //   //   type: 'negative',
      //   //   message: 'An error occured',
      //   //   position: 'bottom-right',
      //   //   color: 'white',
      //   //   textColor: 'primary',
      //   // });
      // }
    };
    return { email, password, isRemember, handleSubmit, btnLoadingState };
  },
});
