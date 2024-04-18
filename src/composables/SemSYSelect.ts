import { ref } from 'vue';

const activeSemSY = ref('');

// fetch sem and sy options then set the active sem sy

const options = ref(['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']);

const changeActiveSemSY = (value: string) => {
  activeSemSY.value = value;
};

export { activeSemSY, options, changeActiveSemSY };
