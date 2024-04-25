import { QTableProps } from 'quasar';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';
import { fetchDepartment, DepartmentData } from 'src/composables/Department';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchDepartment();
    });

    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      return DepartmentData.value || [];
    });

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'department_name',
        required: true,
        label: 'Department Name',
        align: 'center',
        field: 'department_name',
        sortable: true,
      },
      {
        name: 'dean',
        align: 'center',
        label: 'Dean',
        field: 'dean',
      },
      {
        name: 'action',
        align: 'left',
        label: '',
        field: 'action',
        style: 'width: 10%',
      },
    ];
    return { text, selected, options, rows, columns };
  },
});
