import { ref, readonly } from 'vue';
import { Student } from 'src/interface/interface';
import axios from 'axios';

const SetStudent = ref<Student[]>([]);
const StudentData = readonly(SetStudent);

// fetch student data
const fetchStudent = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_student.php';

  await axios.get(url).then((response) => {
    SetStudent.value = response.data.data;
  });
};

// insert student
const insertStudent = async (
  firstName: string,
  middleName: string,
  surname: string,
  studentId: string,
  yearLevel: string,
  block: string,
  programId: string,
  email: string,
  password: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/users/create_student.php';

  const studentData = new FormData();
  studentData.append('firstName', firstName);
  studentData.append('middleName', middleName);
  studentData.append('surname', surname);
  studentData.append('studentId', studentId);
  studentData.append('yearLevel', yearLevel);
  studentData.append('block', block);
  studentData.append('programId', programId);
  studentData.append('email', email);
  studentData.append('password', password);

  try {
    const response = await axios.post(url, studentData, {
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

// Fetch indiv student
const fetchIndivStudent = async (studentId: string) => {
  const url = `http://localhost/timetable-system-backend/api/admin/managedata/fetch_indiv_student.php?studentId=${studentId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

// Edit indiv student data
const updateStudent = async (
  firstName: string,
  middleName: string,
  surname: string,
  schoolId: string,
  yearLevel: string,
  block: string,
  programId: string,
  studentId: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/update_student.php';

  const newStudentData = new FormData();
  newStudentData.append('firstName', firstName);
  newStudentData.append('middleName', middleName);
  newStudentData.append('surname', surname);
  newStudentData.append('schoolId', schoolId);
  newStudentData.append('yearLevel', yearLevel);
  newStudentData.append('block', block);
  newStudentData.append('programId', programId);
  newStudentData.append('studentId', studentId);

  try {
    const response = await axios.post(url, newStudentData, {
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

// Delete student
const deleteStudent = async (studentId: string, userId: string) => {
  const url =
    'http://localhost/timetable-system-backend/api/users/delete_student.php';

  const studentData = new FormData();
  studentData.append('studentId', studentId);
  studentData.append('userId', userId);

  try {
    const response = await axios.post(url, studentData, {
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
  SetStudent,
  StudentData,
  fetchStudent,
  insertStudent,
  fetchIndivStudent,
  updateStudent,
  deleteStudent,
};
