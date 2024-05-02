import { ref, readonly } from 'vue';
import axios from 'axios';
import { Course } from 'src/interface/interface';

const SetCourse = ref<Course[]>([]);
const CourseData = readonly(SetCourse);

// fetch course data
const fetchCourse = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_course.php';

  await axios.get(url).then((response) => {
    SetCourse.value = response.data.data;
  });
};

// insert course
const insertCourse = async (
  courseCode: string,
  courseTypeId: string,
  courseName: string,
  curriculumId: string,
  yearLevel: string,
  semester: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/insert_course.php';

  const courseData = new FormData();
  courseData.append('courseCode', courseCode);
  courseData.append('courseTypeId', courseTypeId);
  courseData.append('courseName', courseName);
  courseData.append('curriculumId', curriculumId);
  courseData.append('yearLevel', yearLevel);
  courseData.append('semester', semester);

  try {
    const response = await axios.post(url, courseData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      maxBodyLength: Infinity,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

// Fetch indiv course
const fetchIndivCourse = async (courseId: string) => {
  const url = `http://localhost/timetable-system-backend/api/admin/managedata/fetch_indiv_course.php?courseId=${courseId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

// Edit indiv course data
const updateCourse = async (
  courseId: string,
  courseCode: string,
  courseTypeId: string,
  courseName: string,
  curriculumId: string,
  yearLevel: string,
  semester: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/update_course.php';

  const newCourseData = new FormData();
  newCourseData.append('courseId', courseId);
  newCourseData.append('courseCode', courseCode);
  newCourseData.append('courseTypeId', courseTypeId);
  newCourseData.append('courseName', courseName);
  newCourseData.append('curriculumId', curriculumId);
  newCourseData.append('yearLevel', yearLevel);
  newCourseData.append('semester', semester);

  try {
    const response = await axios.post(url, newCourseData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      maxBodyLength: Infinity,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete course
const deleteCourse = async (courseId: string) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/delete_course.php';

  const courseData = new FormData();
  courseData.append('courseId', courseId);

  try {
    const response = await axios.post(url, courseData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      maxBodyLength: Infinity,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export {
  SetCourse,
  CourseData,
  fetchCourse,
  insertCourse,
  fetchIndivCourse,
  updateCourse,
  deleteCourse,
};
