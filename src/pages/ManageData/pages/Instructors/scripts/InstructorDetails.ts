import { QTableProps, useQuasar } from 'quasar';
import {
  deleteCourseAssigned,
  fetchCoursesAssigned,
  fetchIndivInstructor,
} from 'src/composables/Instructor';
import { AssignedCourse, Instructor } from 'src/interface/interface';
import { defineComponent, ref, onMounted, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      const id: string = Array.isArray(route.params.instructorId)
        ? route.params.instructorId[0]
        : route.params.instructorId;

      fetchIndivInstructor(id).then((response) => {
        instructorData.value = response.data[0];
        console.log(instructorData.value);
      });

      fetchCoursesAssigned(id).then((response) => {
        console.log(response);
        assignedCourseData.value = response.data;
      });

      pageLoadingState.value = false;
    });

    const $q = useQuasar();
    const route = useRoute();
    const router = useRouter();
    const pageLoadingState = ref<boolean>(true);

    const instructorData = ref<Instructor>();

    const assignedCourseData = ref<AssignedCourse[]>([]);

    // For table column
    let assignedCourseColumns: QTableProps['columns'] = [
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
        required: true,
        label: 'Course Name',
        align: 'left',
        field: 'course_name',
        sortable: true,
      },
      {
        name: 'semester',
        required: true,
        label: 'Semester',
        align: 'center',
        field: 'semester',
        format(val, row) {
          return val == 1 ? '1st Sem' : '2nd Sem';
        },
      },
      {
        name: 'year_level',
        required: true,
        label: 'Year Level',
        align: 'center',
        field: 'year_level',
        sortable: true,
      },
      {
        name: 'action',
        align: 'center',
        label: '',
        field: 'action',
        style: 'width: 5%',
      },
    ];

    const handleDel = (assignCourseId: string) => {
      const id: string = Array.isArray(route.params.instructorId)
        ? route.params.instructorId[0]
        : route.params.instructorId;
      try {
        deleteCourseAssigned(assignCourseId)
          .then((response) => {
            console.log(response);
            $q.notify({
              message: response.data.message,
              position: 'bottom',
              color: 'positive',
              textColor: 'accent',
            });

            fetchCoursesAssigned(id).then((response) => {
              console.log(response);
              assignedCourseData.value = response.data;
            });
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
      } catch (error) {
        throw error;
      }
    };

    return {
      instructorData,
      assignedCourseData,
      assignedCourseColumns,
      pageLoadingState,
      handleDel,
    };
  },
});
