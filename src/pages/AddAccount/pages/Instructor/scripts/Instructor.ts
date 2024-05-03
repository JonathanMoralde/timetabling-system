import { useQuasar } from 'quasar';
import { DepartmentData, fetchDepartment } from 'src/composables/Department';
import {
  fetchIndivInstructor,
  insertInstructor,
  updateInstructor,
} from 'src/composables/Instructor';
import { defineComponent, ref, onBeforeMount, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchDepartment();

      if (route.params.instructorId) {
        const id: string = Array.isArray(route.params.instructorId)
          ? route.params.instructorId[0]
          : route.params.instructorId;

        fetchIndivInstructor(id).then((response) => {
          employeeSchoolID.value = response.data[0].school_id;
          selectedDepartment.value = response.data[0].department_id;
          selectedResearchStatus.value = response.data[0].research_status;
          selectedEmploymentStatus.value = response.data[0].employment_status;
          academicRank.value = response.data[0].academic_rank;
          title.value = response.data[0].title ? response.data[0].title : '';
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

    const employeeSchoolID = ref<string>('');
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
    const selectedResearchStatus = ref<string>('');
    const researchStatusOptions: Array<string> = ['None', 'On-going'];
    const selectedEmploymentStatus = ref<string>('');
    const employmentStatusOptions = ['Regular', 'COS', 'Part-time'];
    const academicRank = ref<string>('');
    // const positionProgram = ref<string>('');
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
        insertInstructor(
          employeeSchoolID.value,
          selectedDepartment.value!.toString(),
          selectedResearchStatus.value,
          academicRank.value,
          title.value,
          selectedEmploymentStatus.value,
          firstName.value,
          middleName.value,
          surName.value,
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

            employeeSchoolID.value = '';
            selectedDepartment.value = null;
            selectedResearchStatus.value = '';
            academicRank.value = '';
            title.value = '';
            selectedEmploymentStatus.value = '';
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

    const handleEdit = () => {
      btnLoadingState.value = true;
      const id: string = Array.isArray(route.params.instructorId)
        ? route.params.instructorId[0]
        : route.params.instructorId;

      try {
        updateInstructor(
          id,
          employeeSchoolID.value,
          selectedDepartment.value!.toString(),
          selectedResearchStatus.value,
          academicRank.value,
          title.value,
          selectedEmploymentStatus.value,
          firstName.value,
          middleName.value,
          surName.value
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
      employeeSchoolID,
      selectedDepartment,
      departmentOptions,
      selectedResearchStatus,
      researchStatusOptions,
      academicRank,
      selectedEmploymentStatus,
      employmentStatusOptions,
      // positionProgram,
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
