import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const selectedInstructor = ref<string>('');
    const instructorOptions: string[] = ['Melvs', 'Jack', 'Julius'];

    const selectedCourse = ref<string>('');
    const courseOptions: string[] = ['IT101', 'IT102'];

    const selectedRoom = ref<string>('');
    const roomOptions: string[] = ['Bedroom', 'Kitchen'];

    const selectedType = ref<string>('');
    const typeOptions: Array<string> = ['Lecture', 'Laboratory', 'Workshop'];

    const selectedProgram = ref<string>('');
    const programOptions: string[] = ['BSIT', 'BSCS', 'BSIS'];

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

    // const selectedStartTime = ref<string>('');
    // const selectedEndTime = ref<string>('');
    // const timeOptions: string[] = ['7:00AM', '7:30AM'];

    const startTime = ref<string>('');
    const endTime = ref<string>('');

    // console.log(startTime.value);
    // console.log(endTime.value);

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
      // selectedStartTime,
      // selectedEndTime,
      // timeOptions,
      selectedType,
      typeOptions,
      startTime,
      endTime,
    };
  },
});
