import axios from 'axios';
import { SYSem } from 'src/interface/interface';
import { readonly, ref, computed } from 'vue';

const SetSYSem = ref<SYSem[]>([]);
const SYSemData = readonly(SetSYSem);

const activeSemSY = ref<number | null>(null);
const options = computed(() => {
  const tempData = SYSemData.value.map((SYSem) => {
    return {
      label: `${SYSem.school_year} - ${
        SYSem.term == 1 ? '1st Sem' : '2nd Sem'
      }`,
      value: SYSem.school_year_semester_id,
      description: `${SYSem.school_year} - ${
        SYSem.term == 1 ? '1st Sem' : '2nd Sem'
      }`,
    };
  });

  return tempData || [];
});

// fetch sem and sy options then set the active sem sy
const fetchSYSem = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_sy_sem.php';

  try {
    await axios.get(url).then((response) => {
      SetSYSem.value = response.data.data;
    });
  } catch (error) {
    throw error;
  }
};

// change active sysem
const changeActive = async (sySemId: string) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/change_active_sy_sem.php';

  const sySemData = new FormData();
  sySemData.append('sySemId', sySemId);

  try {
    const response = await axios.post(url, sySemData, {
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

export { activeSemSY, options, fetchSYSem, SYSemData, changeActive };
