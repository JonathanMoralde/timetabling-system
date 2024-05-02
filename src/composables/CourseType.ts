import { ref, readonly } from 'vue';
import axios from 'axios';
import { CourseType } from 'src/interface/interface';

const SetCourseType = ref<CourseType[]>([]);
const CourseTypeData = readonly(SetCourseType);

// Fetch Course Type Data
const fetchCourseType = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_course_type.php';

  await axios.get(url).then((response) => {
    SetCourseType.value = response.data.data;
  });
};

// insert course type
const insertCourseType = async (
  courseType: string,
  duration: string,
  lecUnit: string,
  labUnit: string,
  loadUnit: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/insert_course_type.php';

  const courseTypeData = new FormData();
  courseTypeData.append('courseType', courseType);
  courseTypeData.append('duration', duration);
  courseTypeData.append('lecUnit', lecUnit);
  courseTypeData.append('labUnit', labUnit);
  courseTypeData.append('loadUnit', loadUnit);

  try {
    const response = await axios.post(url, courseTypeData, {
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

// Fetch indiv course type
const fetchIndivCourseType = async (courseTypeId: string) => {
  const url = `http://localhost/timetable-system-backend/api/admin/managedata/fetch_indiv_course_type.php?courseTypeId=${courseTypeId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

// Edit indiv course type data
const updateCourseType = async (
  courseTypeId: string,
  courseType: string,
  duration: string,
  lecUnit: string,
  labUnit: string,
  loadUnit: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/update_course_type.php';

  const newCourseTypeData = new FormData();
  newCourseTypeData.append('courseType', courseType);
  newCourseTypeData.append('duration', duration);
  newCourseTypeData.append('lecUnit', lecUnit);
  newCourseTypeData.append('labUnit', labUnit);
  newCourseTypeData.append('loadUnit', loadUnit);
  newCourseTypeData.append('courseTypeId', courseTypeId);

  try {
    const response = await axios.post(url, newCourseTypeData, {
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

// Delete course type
const deleteCourseType = async (courseTypeId: string) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/delete_course_type.php';

  const curriculumData = new FormData();
  curriculumData.append('courseTypeId', courseTypeId);

  try {
    const response = await axios.post(url, curriculumData, {
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
  SetCourseType,
  CourseTypeData,
  fetchCourseType,
  insertCourseType,
  fetchIndivCourseType,
  updateCourseType,
  deleteCourseType,
};
