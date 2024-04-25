import { QTableProps } from 'quasar';
import { InstructorData, fetchInstructor } from 'src/composables/Instructor';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchInstructor();
    });

    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      const tempData = InstructorData.value;

      return (
        tempData.map((instructor) => {
          return {
            instructor_id: instructor.instructor_id,
            department_id: instructor.department_id,
            instructor_name: `${instructor.surname}, ${instructor.first_name} ${instructor.middle_name}`,
            academic_rank: instructor.academic_rank,
            department_name: instructor.department_name,
            research_status: instructor.research_status,
            employment_status: instructor.employment_status,
          };
        }) || []
      );
    });

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'instructor_name',
        required: true,
        label: 'Instructor Name',
        align: 'center',
        field: 'instructor_name',
        sortable: true,
      },
      {
        name: 'academic_rank',
        align: 'center',
        label: 'Acad. Rank',
        field: 'academic_rank',
      },
      {
        name: 'department_name',
        align: 'center',
        label: 'Department',
        field: 'department_name',
      },
      {
        name: 'research_status',
        align: 'center',
        label: 'Research Status',
        field: 'research_status',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },
      {
        name: 'employment_status',
        align: 'center',
        label: 'Status',
        field: 'employment_status',
      },
      {
        name: 'consultation_schedule',
        align: 'center',
        label: 'Consultation Sched',
        field: 'consultation_schedule',
      },
      {
        name: 'research_hours',
        align: 'center',
        label: 'Research Hrs',
        field: 'research_hours',
      },
      {
        name: 'extension_services',
        align: 'center',
        label: 'Ext. Services',
        field: 'extension_services',
      },
      {
        name: 'quasi_teaching',
        align: 'center',
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
