import { ref, readonly } from 'vue';
import axios from 'axios';
import { SubjectLoadAPIResponse } from 'src/interface/interface';

const SetSubjectLoadData = ref<SubjectLoadAPIResponse>();
const SubjectLoadData = readonly(SetSubjectLoadData);

// fetch schedules data based on active sem
const fetchSubjectLoad = async (programId?: string) => {
  const url = `http://localhost/timetable-system-backend/api/admin/subjectload/fetch_subject_load.php${
    programId ? `?programId=${programId}` : ''
  }`;

  await axios
    .get(url, {
      withCredentials: true,
    })
    .then((response) => {
      SetSubjectLoadData.value = response.data;
    });
};

export { SetSubjectLoadData, SubjectLoadData, fetchSubjectLoad };
