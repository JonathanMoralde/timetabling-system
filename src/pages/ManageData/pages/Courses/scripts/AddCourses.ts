import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const courseCode = ref<string>('');

    const selectedCourseType = ref<string>('');
    const courseTypeOptions: Array<string> = [
      'Lecture',
      'Laboratory',
      'Lec-Lab',
    ];

    const courseName = ref<string>('');
    const selectedCurriculum = ref<string>();
    const curriculumOptions: Array<string> = ['2023 - BSIT'];
    const selectedYearLevel = ref<number>();
    const yearLevelOptions: Array<number> = [1, 2, 3, 4];
    const selectedSemester = ref<string>();
    const semesterOptions: Array<string> = ['1st Semester', '2nd Semester'];
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
    };
  },
});
