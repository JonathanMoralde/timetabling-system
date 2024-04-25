import { ref, readonly } from 'vue';
import axios from 'axios';
import { CourseType } from 'src/interface/interface';

const SetCourseType = ref<CourseType[]>([]);
const CourseTypeData = readonly(SetCourseType);

const fetchCourseType = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_course_type.php';

  await axios.get(url).then((response) => {
    SetCourseType.value = response.data.data;
  });
};

export { SetCourseType, CourseTypeData, fetchCourseType };
