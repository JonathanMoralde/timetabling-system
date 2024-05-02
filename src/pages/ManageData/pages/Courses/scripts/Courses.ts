import { QTableProps, useQuasar } from 'quasar';
import { CourseData, deleteCourse, fetchCourse } from 'src/composables/Course';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchCourse();
    });

    const $q = useQuasar();

    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      const tempData = CourseData.value || [];
      const searchTerm = text.value.toLocaleLowerCase();

      return tempData
        .map((indivCourse) => {
          return {
            course_id: indivCourse.course_id,
            course_code: indivCourse.course_code,
            course_name: indivCourse.course_name,
            year_level: indivCourse.year_level,
            semester: indivCourse.semester,
            course_type_id: indivCourse.course_type_id,
            course_type: indivCourse.course_type,
            curriculum_id: indivCourse.curriculum_id,
            year_effectivity: indivCourse.year_effectivity,
            curriculum: `${indivCourse.year_effectivity} - ${indivCourse.abbreviation}`,
          };
        })
        .filter((course) => {
          const courseCode =
            course.course_code && course.course_code.toLowerCase();
          const courseName =
            course.course_name && course.course_name.toLowerCase();
          const courseType =
            course.course_type && course.course_type.toLowerCase();
          const curriculum =
            course.curriculum && course.curriculum.toLowerCase();
          const yearLevel = course.year_level.toString().toLowerCase();
          const semester = course.semester.toString().toLowerCase();

          return (
            courseCode.includes(searchTerm) ||
            courseName.includes(searchTerm) ||
            courseType.includes(searchTerm) ||
            curriculum.includes(searchTerm) ||
            yearLevel.includes(searchTerm) ||
            semester.includes(searchTerm)
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
        name: 'course_type',
        align: 'left',
        label: 'Course Type',
        field: 'course_type',
      },
      {
        name: 'curriculum',
        align: 'left',
        label: 'Curriculum',
        field: 'curriculum',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },

      {
        name: 'year_level',
        align: 'center',
        label: 'Year Level',
        field: 'year_level',
      },
      {
        name: 'semester',
        align: 'center',
        label: 'Semester',
        field: 'semester',
      },
      {
        name: 'action',
        align: 'center',
        label: '',
        field: 'action',
        style: 'width: 10%',
      },
    ];

    const handleDel = (courseId: string) => {
      console.log(courseId);
      deleteCourse(courseId)
        .then((response) => {
          console.log(response);
          $q.notify({
            message: response.data.message,
            position: 'bottom',
            color: 'positive',
            textColor: 'accent',
          });

          fetchCourse();
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
