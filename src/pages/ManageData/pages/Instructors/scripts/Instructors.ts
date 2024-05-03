import { QTableProps, useQuasar } from 'quasar';
import {
  InstructorData,
  deleteInstructor,
  fetchInstructor,
} from 'src/composables/Instructor';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchInstructor();
    });

    const $q = useQuasar();

    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      const tempData = InstructorData.value || [];
      const searchTerm = text.value.toLowerCase();

      return tempData
        .map((instructor) => {
          return {
            instructor_id: instructor.instructor_id,
            department_id: instructor.department_id,
            instructor_name: `${instructor.surname}, ${instructor.first_name} ${instructor.middle_name}`,
            academic_rank: instructor.academic_rank,
            department_name: instructor.department_name,
            research_status: instructor.research_status,
            employment_status: instructor.employment_status,
          };
        })
        .filter((i) => {
          const instructorName =
            i.instructor_name && i.instructor_name.toLowerCase();
          const academicRank = i.academic_rank && i.academic_rank.toLowerCase();
          const departmentName =
            i.department_name && i.department_name.toLowerCase();
          const researchStatus =
            i.research_status && i.research_status.toLowerCase();
          const employmentStatus =
            i.employment_status && i.employment_status.toLowerCase();

          return (
            instructorName.includes(searchTerm) ||
            academicRank.includes(searchTerm) ||
            departmentName.includes(searchTerm) ||
            researchStatus.includes(searchTerm) ||
            employmentStatus.includes(searchTerm)
          );
        });
    });

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
        name: 'department_name',
        align: 'left',
        label: 'Department',
        field: 'department_name',
      },
      {
        name: 'research_status',
        align: 'left',
        label: 'Research Status',
        field: 'research_status',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },
      {
        name: 'employment_status',
        align: 'left',
        label: 'Status',
        field: 'employment_status',
      },
      // {
      //   name: 'consultation_schedule',
      //   align: 'center',
      //   label: 'Consultation Sched',
      //   field: 'consultation_schedule',
      // },
      // {
      //   name: 'research_hours',
      //   align: 'center',
      //   label: 'Research Hrs',
      //   field: 'research_hours',
      // },
      // {
      //   name: 'extension_services',
      //   align: 'center',
      //   label: 'Ext. Services',
      //   field: 'extension_services',
      // },
      // {
      //   name: 'quasi_teaching',
      //   align: 'center',
      //   label: 'Quasi Teaching',
      //   field: 'quasi_teaching',
      // },
      {
        name: 'action',
        align: 'center',
        label: '',
        field: 'action',
        style: 'width: 10%',
      },
    ];

    const handleDel = (instructorId: string, userId: string) => {
      deleteInstructor(instructorId, userId)
        .then((response) => {
          console.log(response);
          $q.notify({
            message: response.data.message,
            position: 'bottom',
            color: 'positive',
            textColor: 'accent',
          });

          fetchInstructor();
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
    return { text, selected, options, rows, columns, handleDel };
  },
});
