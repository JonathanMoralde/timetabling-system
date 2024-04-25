import axios from 'axios';

// const API_BASE_URL = 'http://localhost/timetable-system-backend/'; // Replace with your actual API base URL

export const checkSession = async () => {
  try {
    const response = await axios.get(
      'http://localhost/timetable-system-backend/api/users/check_session.php',
      {
        maxBodyLength: Infinity,
        withCredentials: true,
      }
    );
    console.log(response.data.logged_in);

    return response.data.logged_in;
  } catch (error) {
    console.error('Error checking session:', error);
    return false;
  }
};
