import { log } from 'console';
import { QTableProps, useQuasar } from 'quasar';
import {
  StudentData,
  deleteStudent,
  fetchStudent,
} from 'src/composables/Student';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchStudent();
    });

    const $q = useQuasar();

    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      const tempData = StudentData.value || [];
      const searchTerm = text.value.toLowerCase();
      return tempData
        .map((student) => {
          console.log(student);

          return {
            user_id: student.user_id,
            student_id: student.student_id,
            school_id: student.school_id,
            student_name: `${student.surname}, ${student.first_name} ${student.middle_name}`,
            program_name: student.program_name,
            year_level: student.year_level,
            block: student.block,
          };
        })
        .filter((s) => {
          const schoolId = s.school_id && s.school_id.toLowerCase();
          const studentName = s.student_name && s.student_name.toLowerCase();
          const programName = s.program_name && s.program_name.toLowerCase();
          const yearLevel = s.year_level.toString();
          const block = s.block.toLowerCase();

          return (
            schoolId.includes(searchTerm) ||
            studentName.includes(searchTerm) ||
            programName.includes(searchTerm) ||
            yearLevel.includes(searchTerm) ||
            block.includes(searchTerm)
          );
        });
    });

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'school_id',
        required: true,
        label: 'Student ID',
        align: 'left',
        field: 'school_id',
        sortable: true,
      },
      {
        name: 'student_name',
        align: 'left',
        label: 'Student Name',
        field: 'student_name',
      },
      {
        name: 'program_name',
        align: 'left',
        label: 'Program',
        field: 'program_name',
      },
      {
        name: 'year_level',
        align: 'center',
        label: 'Year Level',
        field: 'year_level',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },

      {
        name: 'block',
        align: 'center',
        label: 'Block',
        field: 'block',
      },
      {
        name: 'action',
        align: 'center',
        label: '',
        field: 'action',
        style: 'width: 10%',
      },
    ];

    const handleDel = (studentId: string, userId: string) => {
      deleteStudent(studentId, userId)
        .then((response) => {
          console.log(response);
          $q.notify({
            message: response.data.message,
            position: 'bottom',
            color: 'positive',
            textColor: 'accent',
          });

          fetchStudent();
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
