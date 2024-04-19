import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const selectedDepartment = ref<string>('');
    const departmentOptions: Array<string> = ['CSD', 'Nursing', 'Engineering'];
    const positionProgram = ref<string>('');
    const title = ref<string>('');
    const firstName = ref<string>('');
    const middleName = ref<string>('');
    const surName = ref<string>('');
    const email = ref<string>('');

    const selectedType = ref('');
    const typeOptions: Array<string> = ['Lecture', 'Laboratory', 'Workshop'];
    return {
      selectedDepartment,
      departmentOptions,
      positionProgram,
      title,
      firstName,
      middleName,
      surName,
      email,
      selectedType,
      typeOptions,
    };
  },
});
