import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const newPassword = ref<string>('');
    const confirmPassword = ref<string>('');
    return { newPassword, confirmPassword };
  },
});
