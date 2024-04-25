import { ref, readonly } from 'vue';
import { Student } from 'src/interface/interface';
import axios from 'axios';

const SetStudent = ref<Student[]>([]);
const StudentData = readonly(SetStudent);

const fetchStudent = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_student.php';

  await axios.get(url).then((response) => {
    SetStudent.value = response.data.data;
  });
};

export { SetStudent, StudentData, fetchStudent };
