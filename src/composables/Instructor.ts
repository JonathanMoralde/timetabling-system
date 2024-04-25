import { ref, readonly } from 'vue';
import { Instructor } from 'src/interface/interface';
import axios from 'axios';

const SetInstructor = ref<Instructor[]>([]);
const InstructorData = readonly(SetInstructor);

const fetchInstructor = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_instructor.php';

  await axios.get(url).then((response) => {
    SetInstructor.value = response.data.data;
  });
};

export { SetInstructor, InstructorData, fetchInstructor };
