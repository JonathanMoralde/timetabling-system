import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const email = ref<string>('');
    return { email };
  },
});
