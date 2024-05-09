import { QTableProps, useQuasar } from 'quasar';
import { CourseData, fetchCourse } from 'src/composables/Course';
import {
  assignCourses,
  deleteCourseAssigned,
  fetchCoursesAssigned,
} from 'src/composables/Instructor';
import { AssignedCourse, Course } from 'src/interface/interface';
import { defineComponent, ref, onBeforeMount, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      const id: string = Array.isArray(route.params.instructorId)
        ? route.params.instructorId[0]
        : route.params.instructorId;
      fetchCourse();
      fetchCoursesAssigned(id).then((response) => {
        console.log(response);
        rows.value = response.data;
      });
    });

    const $q = useQuasar();
    const route = useRoute();
    const router = useRouter();
    const btnLoadingState = ref<boolean>(false);

    const selectedCourses = ref<number[] | null>(null);
    const coursesOptions = computed(() => {
      const tempData = CourseData.value || [];
      const assignedCourseIds = rows.value.map((row) => row.course_id);

      return tempData
        .filter((course) => !assignedCourseIds.includes(course.course_id))
        .map((course) => ({
          label: `${course.course_code} - ${course.course_name}`,
          value: course.course_id,
          description: `${course.course_code} - ${course.course_name}`,
        }));
    });

    const handleSubmit = () => {
      btnLoadingState.value = true;
      const id: string = Array.isArray(route.params.instructorId)
        ? route.params.instructorId[0]
        : route.params.instructorId;

      try {
        assignCourses(id, selectedCourses.value!)
          .then((response) => {
            console.log(response);
            $q.notify({
              message: response.data.message,
              position: 'bottom',
              color: 'positive',
              textColor: 'accent',
            });

            selectedCourses.value = null;

            btnLoadingState.value = false;
            fetchCourse();
            fetchCoursesAssigned(id).then((response) => {
              console.log(response);
              rows.value = response.data;
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
            btnLoadingState.value = false;
          });
      } catch (error) {
        throw error;
      }
    };

    const rows = ref<AssignedCourse[]>([]);

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
              rows.value = response.data;
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
      selectedCourses,
      coursesOptions,
      handleSubmit,
      btnLoadingState,
      columns,
      rows,
      handleDel,
    };
  },
});
