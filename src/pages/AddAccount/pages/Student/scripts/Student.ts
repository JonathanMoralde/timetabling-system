import { useQuasar } from 'quasar';
import { ProgramData, fetchProgram } from 'src/composables/Program';
import {
  fetchIndivStudent,
  insertStudent,
  updateStudent,
} from 'src/composables/Student';
import { defineComponent, ref, onBeforeMount, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchProgram();
      console.log('on before mount');

      if (route.params.studentId) {
        const id: string = Array.isArray(route.params.studentId)
          ? route.params.studentId[0]
          : route.params.studentId;

        fetchIndivStudent(id).then((response) => {
          console.log(response);
          studentID.value = response.data[0].school_id;
          selectedYearLevel.value = response.data[0].year_level;
          selectedBlock.value = response.data[0].block;
          selectedProgram.value = response.data[0].program_id;
          firstName.value = response.data[0].first_name;
          middleName.value = response.data[0].middle_name;
          surName.value = response.data[0].surname;
        });
      }
    });

    const $q = useQuasar();
    const route = useRoute();
    const router = useRouter();
    const btnLoadingState = ref<boolean>(false);

    const studentID = ref<string>('');
    const selectedYearLevel = ref<number>();
    const yearLevelOptions: Array<number> = [1, 2, 3, 4, 5, 6];
    const selectedBlock = ref<string>('');
    const blockOptions: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F'];
    const selectedProgram = ref<number | null>(null);
    const programOptions = computed(() => {
      const tempData = ProgramData.value.map((program) => {
        return {
          label: program.abbreviation,
          value: program.program_id,
          description: program.program_name,
        };
      });

      return tempData || [];
    });
    const title = ref<string>('');
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
        insertStudent(
          firstName.value,
          middleName.value,
          surName.value,
          studentID.value,
          selectedYearLevel.value!.toString(),
          selectedBlock.value,
          selectedProgram.value!.toString(),
          email.value,
          password.value
        )
          .then((response) => {
            console.log(response);
            $q.notify({
              message: response.data.message,
              position: 'bottom',
              color: 'positive',
              textColor: 'accent',
            });

            firstName.value = '';
            middleName.value = '';
            surName.value = '';
            (studentID.value = ''), (selectedYearLevel.value = undefined);
            selectedBlock.value = '';
            selectedProgram.value = null;
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

    const handleEdit = () => {
      btnLoadingState.value = true;
      const id: string = Array.isArray(route.params.studentId)
        ? route.params.studentId[0]
        : route.params.studentId;

      try {
        updateStudent(
          firstName.value,
          middleName.value,
          surName.value,
          studentID.value,
          selectedYearLevel.value!.toString(),
          selectedBlock.value,
          selectedProgram.value!.toString(),
          id
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
      studentID,
      selectedYearLevel,
      yearLevelOptions,
      selectedBlock,
      blockOptions,
      selectedProgram,
      programOptions,
      title,
      firstName,
      middleName,
      surName,
      email,
      password,
      confirmPassword,
      handleSubmit,
      handleEdit,
      btnLoadingState,
    };
  },
});
