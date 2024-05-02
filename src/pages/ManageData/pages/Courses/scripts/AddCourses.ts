import { useQuasar } from 'quasar';
import {
  fetchIndivCourse,
  insertCourse,
  updateCourse,
} from 'src/composables/Course';
import { CourseTypeData, fetchCourseType } from 'src/composables/CourseType';
import { CurriculumData, fetchCurriculum } from 'src/composables/Curriculum';
import { defineComponent, ref, onBeforeMount, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchCurriculum();
      fetchCourseType();

      if (route.params.courseId) {
        const id: string = Array.isArray(route.params.courseId)
          ? route.params.courseId[0]
          : route.params.courseId;
        try {
          fetchIndivCourse(id).then((response) => {
            courseCode.value = response.data[0].course_code;
            selectedCourseType.value = response.data[0].course_type_id;
            courseName.value = response.data[0].course_name;
            selectedCurriculum.value = response.data[0].curriculum_id;
            selectedYearLevel.value = response.data[0].year_level;
            selectedSemester.value = response.data[0].semester;
          });
        } catch (error) {
          throw error;
        }
      }
    });

    const $q = useQuasar();
    const route = useRoute();
    const router = useRouter();
    const btnLoadingState = ref<boolean>(false);

    const courseCode = ref<string>('');

    const selectedCourseType = ref<number | null>(null);
    const courseTypeOptions = computed(() => {
      const tempData = CourseTypeData.value.map((courseType) => {
        return {
          label: courseType.course_type,
          value: courseType.course_type_id,
          description: courseType.course_type,
        };
      });
      console.log(tempData);

      return tempData || [];
    });

    const courseName = ref<string>('');
    const selectedCurriculum = ref<number | null>(null);
    const curriculumOptions = computed(() => {
      const tempData = CurriculumData.value.map((curriculum) => {
        return {
          label: `${curriculum.year_effectivity} - ${curriculum.abbreviation}`,
          value: curriculum.curriculum_id,
          description: `${curriculum.year_effectivity} - ${curriculum.abbreviation}`,
        };
      });
      console.log(tempData);

      return tempData || [];
    });
    const selectedYearLevel = ref<number>();
    const yearLevelOptions: Array<number> = [1, 2, 3, 4, 5, 6];
    const selectedSemester = ref<string>();
    const semesterOptions: Array<string> = ['1st Semester', '2nd Semester'];

    const handleSubmit = () => {
      btnLoadingState.value = true;
      console.log(
        courseCode.value,
        selectedCourseType.value!.toString(),
        courseName.value,
        selectedCurriculum.value!.toString(),
        selectedYearLevel.value!.toString(),
        selectedSemester.value!.toString()
      );

      try {
        insertCourse(
          courseCode.value,
          selectedCourseType.value!.toString(),
          courseName.value,
          selectedCurriculum.value!.toString(),
          selectedYearLevel.value!.toString(),
          selectedSemester.value!.toString()
        )
          .then((response) => {
            console.log(response);
            $q.notify({
              message: response.data.message,
              position: 'bottom',
              color: 'positive',
              textColor: 'accent',
            });

            courseCode.value = '';
            selectedCourseType.value = null;
            courseName.value = '';
            selectedCurriculum.value = null;
            selectedYearLevel.value = undefined;
            selectedSemester.value = undefined;

            btnLoadingState.value = false;
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

    const handleEdit = () => {
      btnLoadingState.value = true;

      const id: string = Array.isArray(route.params.courseId)
        ? route.params.courseId[0]
        : route.params.courseId;

      try {
        updateCourse(
          id,
          courseCode.value,
          selectedCourseType.value!.toString(),
          courseName.value,
          selectedCurriculum.value!.toString(),
          selectedYearLevel.value!.toString(),
          selectedSemester.value!.toString()
        )
          .then((response) => {
            console.log(response);
            $q.notify({
              message: response.message,
              position: 'bottom',
              color: 'positive',
              textColor: 'accent',
            });

            router.go(-1);

            btnLoadingState.value = false;
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
    return {
      courseCode,
      selectedCourseType,
      courseTypeOptions,
      courseName,
      selectedCurriculum,
      curriculumOptions,
      selectedYearLevel,
      yearLevelOptions,
      selectedSemester,
      semesterOptions,
      handleSubmit,
      handleEdit,
      btnLoadingState,
    };
  },
});
