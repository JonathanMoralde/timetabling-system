import { ref } from 'vue';

// For LeftDrawer.vue
const LeftDrawerState = ref<boolean>(false);

const ToggleLeftDrawer = () => {
  LeftDrawerState.value = !LeftDrawerState.value;
};

// for modal
const ModalState = ref<boolean>(false);

const ToggleModal = () => {
  ModalState.value = !ModalState.value;
};

export { LeftDrawerState, ToggleLeftDrawer, ModalState, ToggleModal };
