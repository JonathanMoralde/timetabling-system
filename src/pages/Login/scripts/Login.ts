import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const email = ref<string>('');
    const isRemember = ref<boolean>(false);
    return { email, isRemember };
  },
});
