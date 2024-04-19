import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const selectedDepartment = ref<string>('');
    const departmentOptions: Array<string> = ['CSD', 'Nursing', 'Engineering'];
    const buildingName = ref('');
    const roomName = ref('');

    const selectedType = ref('');
    const typeOptions: Array<string> = ['Lecture', 'Laboratory', 'Workshop'];
    return {
      selectedDepartment,
      departmentOptions,
      buildingName,
      roomName,
      selectedType,
      typeOptions,
    };
  },
});
