import { ref, readonly } from 'vue';
import axios from 'axios';
import { Program } from 'src/interface/interface';

const SetProgram = ref<Program[]>([]);
const ProgramData = readonly(SetProgram);

const fetchProgram = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_program.php';

  await axios.get(url).then((response) => {
    SetProgram.value = response.data.data;
  });
};

export { SetProgram, ProgramData, fetchProgram };
