import { log } from 'console';
import { QTableProps } from 'quasar';
import { StudentData, fetchStudent } from 'src/composables/Student';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchStudent();
    });

    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      const tempData = StudentData.value;
      return (
        tempData.map((student) => {
          console.log(student);

          return {
            student_id: student.student_id,
            school_id: student.school_id,
            student_name: `${student.surname}, ${student.first_name} ${student.middle_name}`,
            program_name: student.program_name,
            year_level: student.year_level,
            block: student.block,
          };
        }) || []
      );
    });

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'school_id',
        required: true,
        label: 'Student ID',
        align: 'center',
        field: 'school_id',
        sortable: true,
      },
      {
        name: 'student_name',
        align: 'center',
        label: 'Student Name',
        field: 'student_name',
      },
      {
        name: 'program_name',
        align: 'center',
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
        align: 'left',
        label: '',
        field: 'action',
        style: 'width: 10%',
      },
    ];
    return { text, selected, options, rows, columns };
  },
});
