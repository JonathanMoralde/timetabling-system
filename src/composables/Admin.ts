import axios from 'axios';

// fetch instructor data
const fetchAdminDetails = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/users/fetch_admin_details.php';

  try {
    const response = await axios.get(url, {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

// insert admin
const insertAdmin = async (
  firstName: string,
  middleName: string,
  surname: string,
  email: string,
  password: string,
  departmentId: string | null,
  title: string | undefined,
  position: string | undefined
) => {
  const url =
    'http://localhost/timetable-system-backend/api/users/create_admin.php';

  const adminData = new FormData();
  // adminData.append('employmentStatus', status);
  adminData.append('firstName', firstName);
  adminData.append('middleName', middleName);
  adminData.append('surname', surname);
  adminData.append('email', email);
  adminData.append('password', password);
  if (departmentId) adminData.append('departmentId', departmentId);

  if (position) adminData.append('position', position);

  if (title) adminData.append('title', title);

  try {
    const response = await axios.post(url, adminData, {
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

// For edit profile
const updateAdmin = async (
  firstName: string,
  middleName: string,
  surname: string,
  email: string | undefined,
  // password: string,
  departmentId: string | null,
  title: string | undefined,
  position: string | undefined
) => {
  const url =
    'http://localhost/timetable-system-backend/api/users/update_admin.php';

  const adminData = new FormData();
  // adminData.append('employmentStatus', status);
  adminData.append('firstName', firstName);
  adminData.append('middleName', middleName);
  adminData.append('surname', surname);

  if (email) adminData.append('email', email);
  // adminData.append('password', password);
  if (departmentId) adminData.append('departmentId', departmentId);

  if (position) adminData.append('position', position);

  if (title) adminData.append('title', title);

  try {
    const response = await axios.post(url, adminData, {
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

// for changing password
const updatePassword = async (oldPassword: string, newPassword: string) => {
  const url =
    'http://localhost/timetable-system-backend/api/users/update_password.php';

  const adminData = new FormData();
  adminData.append('oldPassword', oldPassword);
  adminData.append('newPassword', newPassword);

  try {
    const response = await axios.post(url, adminData, {
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
  //   SetAdmin,
  //   AdminData,
  insertAdmin,
  fetchAdminDetails,
  updateAdmin,
  updatePassword,
  //   InstructorData,
  //   fetchInstructor,
  //   insertInstructor,
  //   fetchIndivInstructor,
  //   updateInstructor,
  //   deleteInstructor,
};
