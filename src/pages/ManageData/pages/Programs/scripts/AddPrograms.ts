import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const programName = ref('');
    const abbreviation = ref('');

    const selectedDepartment = ref('');
    const departmentOptions: Array<string> = ['CSD', 'Nursing', 'Engineering'];
    return {
      programName,
      abbreviation,
      selectedDepartment,
      departmentOptions,
    };
  },
});
