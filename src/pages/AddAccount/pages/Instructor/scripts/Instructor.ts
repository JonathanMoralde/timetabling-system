import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const employeeSchoolID = ref<string>('');
    const selectedDepartment = ref<string>('');
    const departmentOptions: Array<string> = ['CSD', 'Nursing', 'Engineering'];
    const selectedResearchStatus = ref<string>('');
    const researchStatusOptions: Array<string> = ['None', 'On-going'];
    const selectedEmploymentStatus = ref<string>('');
    const employmentStatusOptions = ['Regular', 'COS', 'Part-time'];
    const academicRank = ref<string>('');
    const positionProgram = ref<string>('');
    const title = ref<string>('');
    const firstName = ref<string>('');
    const middleName = ref<string>('');
    const surName = ref<string>('');
    const email = ref<string>('');
    const password = ref<string>('');
    const confirmPassword = ref<string>('');

    return {
      employeeSchoolID,
      selectedDepartment,
      departmentOptions,
      selectedResearchStatus,
      researchStatusOptions,
      academicRank,
      selectedEmploymentStatus,
      employmentStatusOptions,
      positionProgram,
      title,
      firstName,
      middleName,
      surName,
      email,
      password,
      confirmPassword,
    };
  },
});
