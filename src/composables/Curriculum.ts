import { ref, readonly } from 'vue';
import axios from 'axios';
import { Curriculum } from 'src/interface/interface';

const SetCurriculum = ref<Curriculum[]>([]);
const CurriculumData = readonly(SetCurriculum);

const fetchCurriculum = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_curriculum.php';

  await axios.get(url).then((response) => {
    SetCurriculum.value = response.data.data;
  });
};

// insert curriculum
const insertCurriculum = async (programId: string, yearEffectivity: string) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/insert_curriculum.php';

  const programData = new FormData();
  programData.append('programId', programId);
  programData.append('yearEffectivity', yearEffectivity);

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

// Fetch indiv curriculum
const fetchIndivCurriculum = async (curriculumId: string) => {
  const url = `http://localhost/timetable-system-backend/api/admin/managedata/fetch_indiv_curriculum.php?curriculumId=${curriculumId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

// Edit indiv curriculum data
const updateCurriculum = async (
  curriculumId: string,
  programId: string,
  yearEffectivity: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/update_curriculum.php';

  const newCurriculumData = new FormData();
  newCurriculumData.append('programId', programId);
  newCurriculumData.append('yearEffectivity', yearEffectivity);
  newCurriculumData.append('curriculumId', curriculumId);

  try {
    const response = await axios.post(url, newCurriculumData, {
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

// Delete curriculum
const deleteCurriculum = async (curriculumId: string) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/delete_curriculum.php';

  const curriculumData = new FormData();
  curriculumData.append('curriculumId', curriculumId);

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
  SetCurriculum,
  CurriculumData,
  fetchCurriculum,
  insertCurriculum,
  fetchIndivCurriculum,
  updateCurriculum,
  deleteCurriculum,
};
