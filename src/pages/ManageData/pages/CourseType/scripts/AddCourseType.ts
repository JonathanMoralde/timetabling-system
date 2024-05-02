import { useQuasar } from 'quasar';
import {
  fetchIndivCourseType,
  insertCourseType,
  updateCourseType,
} from 'src/composables/CourseType';
import { defineComponent, ref, onBeforeMount, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      if (route.params.courseTypeId) {
        const id: string = Array.isArray(route.params.courseTypeId)
          ? route.params.courseTypeId[0]
          : route.params.courseTypeId;

        fetchIndivCourseType(id).then((response) => {
          selectedCourseType.value = response.data[0].course_type;
          selectedDuration.value = response.data[0].duration;
          selectedLectureUnit.value = response.data[0].lec_unit;
          selectedLaboratoryUnit.value = response.data[0].lab_unit;
          selectedLoadUnit.value = response.data[0].load_unit;
        });
      }
    });

    const $q = useQuasar();
    const route = useRoute();
    const router = useRouter();
    const btnLoadingState = ref<boolean>(false);

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
    const lectureUnitOptions: Array<number> = [5.0, 4.0, 3.0, 2.0, 1.0, 0];
    const selectedLaboratoryUnit = ref<number>();
    const laboratoryUnitOptions: Array<number> = [5.0, 4.0, 3.0, 2.0, 1.0, 0];
    const selectedLoadUnit = ref<number>();
    const loadUnitOptions: Array<number> = [5.0, 4.0, 3.0, 2.0, 1.0, 0];

    const handleSubmit = () => {
      btnLoadingState.value = true;
      try {
        insertCourseType(
          selectedCourseType.value,
          selectedDuration.value,
          selectedLectureUnit.value!.toString(),
          selectedLaboratoryUnit.value!.toString(),
          selectedLoadUnit.value!.toString()
        )
          .then((response) => {
            console.log(response);
            $q.notify({
              message: response.data.message,
              position: 'bottom',
              color: 'positive',
              textColor: 'accent',
            });

            selectedCourseType.value = '';
            selectedDuration.value = '';
            selectedLectureUnit.value = undefined;
            selectedLaboratoryUnit.value = undefined;
            selectedLoadUnit.value = undefined;

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
      const id: string = Array.isArray(route.params.courseTypeId)
        ? route.params.courseTypeId[0]
        : route.params.courseTypeId;

      try {
        updateCourseType(
          id,
          selectedCourseType.value,
          selectedDuration.value,
          selectedLectureUnit.value!.toString(),
          selectedLaboratoryUnit.value!.toString(),
          selectedLoadUnit.value!.toString()
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
      handleSubmit,
      handleEdit,
      btnLoadingState,
    };
  },
});
