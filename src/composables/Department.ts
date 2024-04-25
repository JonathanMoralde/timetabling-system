import { ref, readonly } from 'vue';
import axios from 'axios';
import { Department } from 'src/interface/interface';

const SetDepartment = ref<Department[]>([]);
const DepartmentData = readonly(SetDepartment);

const fetchDepartment = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_department.php';

  await axios.get(url).then((response) => {
    SetDepartment.value = response.data.data;
  });
};

export { SetDepartment, DepartmentData, fetchDepartment };
