import { ref } from 'vue';

// For LeftDrawer.vue
const LeftDrawerState = ref(false);

const ToggleLeftDrawer = () => {
  LeftDrawerState.value = !LeftDrawerState.value;
};

export { LeftDrawerState, ToggleLeftDrawer };
