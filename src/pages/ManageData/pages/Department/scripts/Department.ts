import { QTableProps, useQuasar } from 'quasar';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';
import {
  fetchDepartment,
  DepartmentData,
  deleteDepartment,
} from 'src/composables/Department';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchDepartment();
    });

    const $q = useQuasar();
    const textSearch = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      const departments = DepartmentData.value || [];
      const searchTerm = textSearch.value.toLowerCase();

      return departments.filter((department) => {
        const departmentName =
          department.department_name &&
          department.department_name.toLowerCase();
        const dean = department.dean && department.dean.toLowerCase();

        return departmentName.includes(searchTerm) || dean.includes(searchTerm);
      });
    });

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'department_name',
        required: true,
        label: 'Department Name',
        align: 'left',
        field: 'department_name',
        sortable: true,
      },
      {
        name: 'dean',
        align: 'left',
        label: 'Dean',
        field: 'dean',
      },
      {
        name: 'action',
        align: 'center',
        label: '',
        field: 'action',
        style: 'width: 10%',
      },
    ];

    // for delete
    const handleDel = (departmentId: string) => {
      deleteDepartment(departmentId)
        .then((response) => {
          $q.notify({
            message: response.data.message,
            position: 'bottom',
            color: 'positive',
            textColor: 'accent',
          });

          fetchDepartment();
        })
        .catch((error) => {
          console.log(error);

          $q.notify({
            type: 'negative',
            message: error.message,
            position: 'bottom',
            color: 'negative',
            textColor: 'accent',
          });
        });
    };

    return { textSearch, selected, options, rows, columns, handleDel };
  },
});
