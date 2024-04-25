import { ref, readonly } from 'vue';
import axios from 'axios';
import { Curriculum } from 'src/interface/interface';

const SetCurriculum = ref<Curriculum[]>([]);
const CurriculumData = readonly(SetCurriculum);

const fetchCurriculum = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_curriculum.php';

  await axios.get(url).then((response) => {
    SetCurriculum.value = response.data.data;
  });
};

export { SetCurriculum, CurriculumData, fetchCurriculum };
