import { ref, readonly } from 'vue';
import axios from 'axios';
import { Program } from 'src/interface/interface';

const SetProgram = ref<Program[]>([]);
const ProgramData = readonly(SetProgram);

// fetch programs
const fetchProgram = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_program.php';

  await axios.get(url).then((response) => {
    SetProgram.value = response.data.data;
  });
};

// insert program
const insertProgram = async (
  programName: string,
  abbreviation: string,
  departmentId: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/insert_program.php';

  const programData = new FormData();
  programData.append('programName', programName);
  programData.append('abbreviation', abbreviation);
  programData.append('departmentId', departmentId);

  try {
    const response = await axios.post(url, programData, {
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

// Fetch indiv room
const fetchIndivProgram = async (programId: string) => {
  const url = `http://localhost/timetable-system-backend/api/admin/managedata/fetch_indiv_program.php?programId=${programId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

// Edit indiv room data
const updateProgram = async (
  programId: string,
  programName: string,
  abbreviation: string,
  departmentId: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/update_program.php';

  const newProgramData = new FormData();
  newProgramData.append('programId', programId);
  newProgramData.append('departmentId', departmentId);
  newProgramData.append('programName', programName);
  newProgramData.append('abbreviation', abbreviation);

  try {
    const response = await axios.post(url, newProgramData, {
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

// Delete room
const deleteProgram = async (programId: string) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/delete_program.php';

  const programData = new FormData();
  programData.append('programId', programId);

  try {
    const response = await axios.post(url, programData, {
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
  SetProgram,
  ProgramData,
  fetchProgram,
  insertProgram,
  fetchIndivProgram,
  updateProgram,
  deleteProgram,
};
