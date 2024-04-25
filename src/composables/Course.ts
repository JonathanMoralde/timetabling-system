import { ref, readonly } from 'vue';
import axios from 'axios';
import { Course } from 'src/interface/interface';

const SetCourse = ref<Course[]>([]);
const CourseData = readonly(SetCourse);

const fetchCourse = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_course.php';

  await axios.get(url).then((response) => {
    SetCourse.value = response.data.data;
  });
};

export { SetCourse, CourseData, fetchCourse };
