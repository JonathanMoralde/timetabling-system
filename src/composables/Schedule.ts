import { ref, readonly } from 'vue';
import axios from 'axios';
import { Schedule } from 'src/interface/interface';

const SetSchedule = ref<Schedule[]>([]);
const ScheduleData = readonly(SetSchedule);

const fetchSchedule = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_sched_active_sysem.php';

  await axios.get(url).then((response) => {
    SetSchedule.value = response.data.data;
  });
};

export { SetSchedule, ScheduleData, fetchSchedule };
