import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const departmentName = ref('');
    const buildingName = ref('');
    const roomName = ref('');

    const selectedType = ref('');
    const typeOptions: Array<string> = ['Lecture', 'Laboratory', 'Workshop'];
    return {
      departmentName,
      buildingName,
      roomName,
      selectedType,
      typeOptions,
    };
  },
});
