import { QTableProps, useQuasar } from 'quasar';
import {
  CourseTypeData,
  deleteCourseType,
  fetchCourseType,
} from 'src/composables/CourseType';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchCourseType();
    });

    const $q = useQuasar();

    const textSearch = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      const courseTypes = CourseTypeData.value || [];
      const searchTerm = textSearch.value.toLowerCase();
      return courseTypes.filter((courseType) => {
        const courseTypeName =
          courseType.course_type && courseType.course_type.toLowerCase();
        const duration = courseType.duration.toString();
        const lecUnit = courseType.lec_unit.toString();
        const labUnit = courseType.lab_unit.toString();
        const loadUnit = courseType.load_unit.toString();

        return (
          courseTypeName.includes(searchTerm) ||
          duration.includes(searchTerm) ||
          lecUnit.includes(searchTerm) ||
          labUnit.includes(searchTerm) ||
          loadUnit.includes(searchTerm)
        );
      });
    });

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'course_type',
        required: true,
        label: 'Course Type',
        align: 'left',
        field: 'course_type',
        sortable: true,
      },
      {
        name: 'duration',
        align: 'left',
        label: 'Duration',
        field: 'duration',
      },
      {
        name: 'lec_unit',
        align: 'left',
        label: 'Lecture Unit',
        field: 'lec_unit',
      },
      {
        name: 'lab_unit',
        align: 'left',
        label: 'Laboratory Unit',
        field: 'lab_unit',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },

      {
        name: 'load_unit',
        align: 'left',
        label: 'Load Unit',
        field: 'load_unit',
      },
      {
        name: 'action',
        align: 'center',
        label: '',
        field: 'action',
        style: 'width: 10%',
      },
    ];

    const handleDel = (courseTypeId: string) => {
      try {
        deleteCourseType(courseTypeId)
          .then((response) => {
            $q.notify({
              message: response.data.message,
              position: 'bottom',
              color: 'positive',
              textColor: 'accent',
            });

            fetchCourseType();
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
    return { textSearch, selected, options, rows, columns, handleDel };
  },
});
