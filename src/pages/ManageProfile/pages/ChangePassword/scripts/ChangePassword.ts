import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const currentPassword = ref<string>('');
    const newPassword = ref<string>('');
    const confirmPassword = ref<string>('');
    return { currentPassword, newPassword, confirmPassword };
  },
});
