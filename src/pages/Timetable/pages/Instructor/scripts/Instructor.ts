import { QTableColumn } from 'quasar';
import { defineComponent, ref, onMounted, computed } from 'vue';

export default defineComponent({
  setup() {
    const text = ref<string>('');
    const selected = ref<string>('test');
    const options = ['test', 'test2'];

    const times: string[] = [
      '7:00AM-7:30AM',
      '7:30AM-8:00AM',
      '8:00AM-8:30AM',
      '8:30AM-9:00AM',
      '9:00AM-9:30AM',
      '9:30AM-10:00AM',
      '10:00AM-10:30AM',
      '10:30AM-11:00AM',
      '11:00AM-11:30AM',
      '11:30AM-12:00PM',
      '12:00PM-12:30PM',
      '12:30PM-1:00PM',
      '1:00PM-1:30PM',
      '1:30PM-2:00PM',
      '2:00PM-2:30PM',
      '2:30PM-3:00PM',
      '3:00PM-3:30PM',
      '3:30PM-4:00PM',
      '4:00PM-4:30PM',
      '4:30PM-5:00PM',
      '5:00PM-5:30PM',
      '5:30PM-6:00PM',
      '6:00PM-6:30PM',
      '6:30PM-7:00PM',
      '7:00PM-7:30PM',
      '7:30PM-8:00PM',
    ];

    const daysOfWeek: string[] = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    const rows = computed(() => {
      const tempData: any[] = [];
      times.forEach((time) => {
        tempData.push({
          time_slot: time,
          Monday: '',
          Tuesday: '',
          Wednesday: '',
          Thursday: '',
          Friday: '',
          Saturday: '',
          Sunday: '',
        });
      });
      console.log(tempData);

      return tempData;
    });

    const columns: QTableColumn[] = [
      {
        name: 'timeSlot',
        label: 'Time Slot',
        field: 'time_slot',
        align: 'center',
      },
      ...daysOfWeek.map(
        (day): QTableColumn => ({
          name: day,
          label: day,
          field: day,
          align: 'center',
        })
      ),
    ];

    return {
      text,
      selected,
      options,
      columns,
      rows,
    };
  },
});
