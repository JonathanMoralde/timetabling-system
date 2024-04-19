import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const selectedCourseType = ref<string>('');
    const courseTypeOptions: Array<string> = [
      'Lecture',
      'Laboratory',
      'Lec-Lab',
    ];

    const selectedDuration = ref<string>('');
    const durationOptions: Array<string> = [
      '1 Hours',
      '2 Hours',
      '3 Hours',
      '4 Hours',
      '5 Hours',
    ];
    const selectedLectureUnit = ref<number>();
    const lectureUnitOptions: Array<number> = [3.0, 2.0, 1.0, 0];
    const selectedLaboratoryUnit = ref<number>();
    const laboratoryUnitOptions: Array<number> = [3.0, 2.0, 1.0, 0];
    const selectedLoadUnit = ref<number>();
    const loadUnitOptions: Array<number> = [5.0, 4.0, 3.0, 2.0, 1.0, 0];
    return {
      selectedCourseType,
      courseTypeOptions,
      selectedDuration,
      durationOptions,
      selectedLectureUnit,
      lectureUnitOptions,
      selectedLaboratoryUnit,
      laboratoryUnitOptions,
      selectedLoadUnit,
      loadUnitOptions,
    };
  },
});
