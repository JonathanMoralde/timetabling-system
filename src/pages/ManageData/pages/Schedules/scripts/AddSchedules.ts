import { useQuasar } from 'quasar';
import { CourseData, fetchCourse } from 'src/composables/Course';
import { CourseTypeData, fetchCourseType } from 'src/composables/CourseType';
import { InstructorData, fetchInstructor } from 'src/composables/Instructor';
import { ProgramData, fetchProgram } from 'src/composables/Program';
import { RoomData, fetchRoom } from 'src/composables/Room';
import {
  fetchIndivSchedule,
  insertSchedule,
  updateSchedule,
} from 'src/composables/Schedule';
import { fetchSYSem } from 'src/composables/SemSYSelect';
import { defineComponent, ref, onBeforeMount, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchInstructor();
      fetchCourse();
      fetchRoom();
      fetchCourseType();
      fetchProgram();
      fetchSYSem();

      if (route.params.scheduleId) {
        const id: string = Array.isArray(route.params.scheduleId)
          ? route.params.scheduleId[0]
          : route.params.scheduleId;

        fetchIndivSchedule(id).then((response) => {
          selectedInstructor.value = response.data[0].instructor_id;
          selectedCourse.value = response.data[0].course_id;
          selectedRoom.value = response.data[0].room_id;
          selectedType.value = response.data[0].course_type_id;
          selectedProgram.value = response.data[0].program_id;
          selectedYearLevel.value = response.data[0].year_level;
          selectedBlock.value = response.data[0].block;
          selectedDay.value = response.data[0].day;
          startTime.value = response.data[0].start_time;
          endTime.value = response.data[0].end_time;
        });
      }
    });

    const $q = useQuasar();
    const route = useRoute();
    const router = useRouter();
    const btnLoadingState = ref<boolean>(false);

    const selectedInstructor = ref<number | null>(null);
    const instructorOptions = computed(() => {
      const tempData = InstructorData.value || [];

      return tempData.map((instructor) => {
        return {
          label: `${instructor.surname}, ${instructor.first_name} ${instructor.middle_name}`,
          value: instructor.instructor_id,
          description: `${instructor.surname}, ${instructor.first_name} ${instructor.middle_name}`,
        };
      });
    });

    const selectedCourse = ref<number | null>(null);
    const courseOptions = computed(() => {
      const tempData = CourseData.value || [];

      return tempData.map((course) => {
        return {
          label: `${course.course_code} - ${course.course_name}`,
          value: course.course_id,
          description: `${course.course_code} - ${course.course_name}`,
        };
      });
    });

    const selectedRoom = ref<number | null>(null);
    const roomOptions = computed(() => {
      const tempData = RoomData.value || [];

      return tempData.map((room) => {
        return {
          label: room.room_name,
          value: room.room_id,
          description: room.room_name,
        };
      });
    });

    const selectedType = ref<number | null>(null);
    const typeOptions = computed(() => {
      const tempData = CourseTypeData.value || [];

      return tempData.map((courseType) => {
        return {
          label: courseType.course_type,
          value: courseType.course_type_id,
          description: courseType.course_type,
        };
      });
    });

    const selectedProgram = ref<number | null>(null);
    const programOptions = computed(() => {
      const tempData = ProgramData.value || [];

      return tempData.map((program) => {
        return {
          label: program.abbreviation,
          value: program.program_id,
          description: program.program_name,
        };
      });
    });

    const selectedYearLevel = ref<number>();
    const yearLevelOptions: number[] = [1, 2, 3, 4, 5];

    const selectedBlock = ref<string>('');
    const blockOptions: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];

    const selectedDay = ref<string>('');
    const dayOptions: string[] = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    const startTime = ref<string>('');
    const endTime = ref<string>('');

    // const selectedSYSem = ref<string>('');
    // const SYSemOptions: string[] = ['test', 'test2'];

    const handleSubmit = () => {
      btnLoadingState.value = true;
      try {
        insertSchedule(
          selectedInstructor.value!.toString(),
          selectedCourse.value!.toString(),
          selectedRoom.value!.toString(),
          selectedCourse.value!.toString(),
          selectedProgram.value!.toString(),
          selectedYearLevel.value!.toString(),
          selectedBlock.value,
          selectedDay.value,
          startTime.value,
          endTime.value
        )
          .then((response) => {
            console.log(response);
            $q.notify({
              message: response.data.message,
              position: 'bottom',
              color: 'positive',
              textColor: 'accent',
            });

            selectedInstructor.value = null;
            selectedCourse.value = null;
            selectedRoom.value = null;
            selectedCourse.value = null;
            selectedProgram.value = null;
            selectedYearLevel.value = undefined;
            selectedBlock.value = '';
            selectedDay.value = '';
            startTime.value = '';
            endTime.value = '';

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
      const id: string = Array.isArray(route.params.scheduleId)
        ? route.params.scheduleId[0]
        : route.params.scheduleId;

      try {
        updateSchedule(
          id,
          selectedInstructor.value!.toString(),
          selectedCourse.value!.toString(),
          selectedRoom.value!.toString(),
          selectedCourse.value!.toString(),
          selectedProgram.value!.toString(),
          selectedYearLevel.value!.toString(),
          selectedBlock.value,
          selectedDay.value,
          startTime.value,
          endTime.value
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
      selectedInstructor,
      instructorOptions,
      selectedCourse,
      courseOptions,
      selectedRoom,
      roomOptions,
      selectedProgram,
      programOptions,
      selectedYearLevel,
      yearLevelOptions,
      selectedBlock,
      blockOptions,
      selectedDay,
      dayOptions,
      selectedType,
      typeOptions,
      startTime,
      endTime,
      // selectedSYSem,
      // SYSemOptions,
      handleSubmit,
      handleEdit,
      btnLoadingState,
    };
  },
});
