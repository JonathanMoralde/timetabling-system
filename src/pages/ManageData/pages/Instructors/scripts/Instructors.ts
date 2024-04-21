import { QTableProps } from 'quasar';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = ref([]);

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'instructor_name',
        required: true,
        label: 'Instructor Name',
        align: 'left',
        field: 'instructor_name',
        sortable: true,
      },
      {
        name: 'academic_rank',
        align: 'left',
        label: 'Acad. Rank',
        field: 'academic_rank',
      },
      {
        name: 'department',
        align: 'center',
        label: 'Department',
        field: 'department',
      },
      {
        name: 'research_status',
        align: 'right',
        label: 'Research Status',
        field: 'research_status',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },
      {
        name: 'status',
        align: 'left',
        label: 'Status',
        field: 'status',
      },
      {
        name: 'consultation_schedule',
        align: 'left',
        label: 'Consultation Sched',
        field: 'consultation_schedule',
      },
      {
        name: 'research_hours',
        align: 'left',
        label: 'Research Hrs',
        field: 'research_hours',
      },
      {
        name: 'extension_services',
        align: 'left',
        label: 'Ext. Services',
        field: 'extension_services',
      },
      {
        name: 'quasi_teaching',
        align: 'left',
        label: 'Quasi Teaching',
        field: 'quasi_teaching',
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
