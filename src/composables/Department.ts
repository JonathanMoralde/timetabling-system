import { ref, readonly } from 'vue';
import axios from 'axios';
import { Department } from 'src/interface/interface';

// Department Data
const SetDepartment = ref<Department[]>([]);
const DepartmentData = readonly(SetDepartment);

// Fetch Department Data
const fetchDepartment = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_department.php';

  await axios.get(url).then((response) => {
    SetDepartment.value = response.data.data;
  });
};

// Insert individual department
const insertDepartment = async (departmentName: string, dean: string) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/insert_department.php';

  const departmentData = new FormData();
  departmentData.append('departmentName', departmentName);
  departmentData.append('dean', dean);

  try {
    const response = await axios.post(url, departmentData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      maxBodyLength: Infinity,
      withCredentials: true,
    });
    return response.data; // Return the response data
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

// fetch individual department data
const fetchIndivDepartment = async (departmentId: string) => {
  const url = `http://localhost/timetable-system-backend/api/admin/managedata/fetch_indiv_department.php?departmentId=${departmentId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

// Edit indiv department data
const updateDepartment = async (
  departmentId: string,
  departmentName: string,
  deanName: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/update_department.php';

  const newDepartmentData = new FormData();
  newDepartmentData.append('departmentId', departmentId);
  newDepartmentData.append('departmentName', departmentName);
  newDepartmentData.append('deanName', deanName);

  try {
    const response = await axios.post(url, newDepartmentData, {
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

// Delete department
const deleteDepartment = async (departmentId: string) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/delete_department.php';

  const departmentData = new FormData();
  departmentData.append('departmentId', departmentId);

  try {
    const response = await axios.post(url, departmentData, {
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
  SetDepartment,
  DepartmentData,
  fetchDepartment,
  insertDepartment,
  fetchIndivDepartment,
  updateDepartment,
  deleteDepartment,
};
