import { QTableProps, useQuasar } from 'quasar';
import { DepartmentData, fetchDepartment } from 'src/composables/Department';
import { fetchSubjectLoad, SubjectLoadData } from 'src/composables/SubjectLoad';
import { InstructorScheds } from 'src/interface/interface';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchDepartment();
      fetchSubjectLoad().then(() => {
        console.log(SubjectLoadData.value);
      });
    });

    const $q = useQuasar();

    const text = ref('');
    const selectedDepartment = ref<number | null>();
    const departmentOptions = computed(() => {
      const tempData = DepartmentData.value || [];

      return tempData.map((department) => {
        return {
          label: department.department_name,
          value: department.department_id,
          description: department.department_name,
        };
      });
    });

    const data = computed(() => {
      const tempData = SubjectLoadData.value ? SubjectLoadData.value.data : [];
      const searchTerm = text.value.toLowerCase();

      return tempData.filter((instructor) => {
        const firstName = instructor.first_name.toLowerCase();
        const middleName = instructor.middle_name.toLowerCase();
        const surname = instructor.surname.toLowerCase();
        const acadRank = instructor.academic_rank.toLowerCase();
        const status = instructor.employment_status.toLowerCase();
        const departmentName = instructor.department_name.toLowerCase();

        return (
          firstName.includes(searchTerm) ||
          middleName.includes(searchTerm) ||
          surname.includes(searchTerm) ||
          acadRank.includes(searchTerm) ||
          status.includes(searchTerm) ||
          departmentName.includes(searchTerm)
        );
      });
    });

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'course_code',
        required: true,
        label: 'Course Code',
        align: 'left',
        field: 'course_code',
        sortable: true,
      },
      {
        name: 'course_name',
        align: 'left',
        label: 'Course Name',
        field: 'course_name',
      },
      {
        name: 'time',
        align: 'center',
        label: 'Time',
        field: 'time',
      },
      {
        name: 'day',
        align: 'center',
        label: 'Day',
        field: 'day',
      },
      {
        name: 'room',
        align: 'left',
        label: 'Room',
        field: 'room',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },
      {
        name: 'credit_units',
        align: 'center',
        label: 'Credit Units',
        field: 'credit_units',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },
      {
        name: 'load_unit',
        align: 'center',
        label: 'Load Units',
        field: 'load_unit',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },
      {
        name: 'class',
        align: 'center',
        label: 'Class',
        field: 'class',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },
    ];

    const calculateTotal = (
      schedules: readonly InstructorScheds[],
      isLoadUnit: boolean
    ) => {
      let total = 0;

      schedules.forEach((sched) => {
        if (isLoadUnit) {
          total += +sched.load_unit;
        } else {
          total += +sched.lec_unit + +sched.lab_unit;
        }
      });

      return total;
    };

    const handleUpdate = (value: string | undefined | null) => {
      console.log(value);
      $q.notify({
        type: 'ongoing',
        group: 'loading',
        timeout: 1000, // we want to be in control when it gets dismissed
        spinner: true,
        message: 'Fetching Schedule...',
        textColor: 'accent',
      });
      fetchSubjectLoad(value ? value : undefined)
        .then(() => {
          // End notif loading after successful fetch
          $q.notify({
            // group: 'loading',
            icon: 'done', // we add an icon
            spinner: false, // we reset the spinner setting so the icon can be displayed
            message: 'Fetching done!',
            color: 'positive',
            timeout: 2500, // we will timeout it in 2.5s
          });
        })
        .catch((error) => {
          $q.notify({
            type: 'negative',
            message: error.message,
            position: 'bottom',
            color: 'negative',
            textColor: 'accent',
          });
        });
    };

    return {
      text,
      selectedDepartment,
      departmentOptions,
      data,
      columns,
      calculateTotal,
      fetchSubjectLoad,
      handleUpdate,
    };
  },
});
