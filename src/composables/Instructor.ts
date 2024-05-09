import { ref, readonly } from 'vue';
import { Instructor } from 'src/interface/interface';
import axios from 'axios';

const SetInstructor = ref<Instructor[]>([]);
const InstructorData = readonly(SetInstructor);

// fetch instructor data
const fetchInstructor = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_instructor.php';

  await axios.get(url).then((response) => {
    SetInstructor.value = response.data.data;
  });
};

// insert instructor
const insertInstructor = async (
  schoolEmployeeId: string,
  departmentId: string,
  researchStatus: string,
  academicRank: string,
  title: string,
  status: string,
  firstName: string,
  middleName: string,
  surname: string,
  email: string,
  password: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/users/create_instructor.php';

  const instructorData = new FormData();
  instructorData.append('employeeSchoolId', schoolEmployeeId);
  instructorData.append('departmentId', departmentId);
  instructorData.append('researchStatus', researchStatus);
  instructorData.append('academicRank', academicRank);
  instructorData.append('title', title);
  instructorData.append('employmentStatus', status);
  instructorData.append('firstName', firstName);
  instructorData.append('middleName', middleName);
  instructorData.append('surname', surname);
  instructorData.append('email', email);
  instructorData.append('password', password);

  try {
    const response = await axios.post(url, instructorData, {
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

// Fetch indiv instructor
const fetchIndivInstructor = async (instructorId: string) => {
  const url = `http://localhost/timetable-system-backend/api/admin/managedata/fetch_indiv_instructor.php?instructorId=${instructorId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

// Edit indiv instructor data
const updateInstructor = async (
  instructorId: string,
  schoolEmployeeId: string,
  departmentId: string,
  researchStatus: string,
  academicRank: string,
  title: string,
  status: string,
  firstName: string,
  middleName: string,
  surname: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/update_instructor.php';

  const instructorData = new FormData();
  instructorData.append('instructorId', instructorId);
  instructorData.append('employeeSchoolId', schoolEmployeeId);
  instructorData.append('departmentId', departmentId);
  instructorData.append('researchStatus', researchStatus);
  instructorData.append('academicRank', academicRank);
  instructorData.append('title', title);
  instructorData.append('employmentStatus', status);
  instructorData.append('firstName', firstName);
  instructorData.append('middleName', middleName);
  instructorData.append('surname', surname);

  try {
    const response = await axios.post(url, instructorData, {
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

// Delete instructor
const deleteInstructor = async (instructorId: string, userId: string) => {
  const url =
    'http://localhost/timetable-system-backend/api/users/delete_instructor.php';

  const instructorData = new FormData();
  instructorData.append('instructorId', instructorId);
  instructorData.append('userId', userId);

  try {
    const response = await axios.post(url, instructorData, {
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

// Assign courses to the instructor
const assignCourses = async (instructorId: string, courses: number[]) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/assign_course.php';

  const instructorData = new FormData();
  instructorData.append('instructorId', instructorId);
  instructorData.append('courses', JSON.stringify(courses));

  try {
    const response = await axios.post(url, instructorData, {
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

// Fetch the courses assigned to the instructor
const fetchCoursesAssigned = async (instructorId: string) => {
  const url = `http://localhost/timetable-system-backend/api/admin/managedata/fetch_courses_assigned.php?instructorId=${instructorId}`;

  try {
    const response = await axios.get(url, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

// Delete course assigned
const deleteCourseAssigned = async (courseAssignedId: string) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/delete_course_assigned.php';

  const instructorData = new FormData();
  instructorData.append('courseAssignedId', courseAssignedId);

  try {
    const response = await axios.post(url, instructorData, {
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
  SetInstructor,
  InstructorData,
  fetchInstructor,
  insertInstructor,
  fetchIndivInstructor,
  updateInstructor,
  deleteInstructor,
  assignCourses,
  fetchCoursesAssigned,
  deleteCourseAssigned,
};
