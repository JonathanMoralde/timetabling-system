import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const selectedProgram = ref('');
    const programOptions: Array<string> = ['BSIT', 'BSCS', 'BSIS'];

    const selectedYear = ref('');
    const yearOptions: Array<string> = ['2016', '2017', '2018'];
    return {
      selectedProgram,
      programOptions,
      selectedYear,
      yearOptions,
    };
  },
});
