import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const studentID = ref<string>('');
    const selectedYearLevel = ref<string>('');
    const yearLevelOptions: Array<number> = [1, 2, 3, 4, 5];
    const selectedBlock = ref<string>('');
    const blockOptions: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F'];
    const selectedProgram = ref<string>('');
    const programOptions: Array<string> = ['BSIT', 'BSCS', 'BSIS'];
    const title = ref<string>('');
    const firstName = ref<string>('');
    const middleName = ref<string>('');
    const surName = ref<string>('');
    const email = ref<string>('');
    const password = ref<string>('');
    const confirmPassword = ref<string>('');

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
    };
  },
});
