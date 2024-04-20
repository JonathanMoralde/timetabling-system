import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const departmentName = ref('');
    const deanName = ref('');

    return {
      departmentName,
      deanName,
    };
  },
});
