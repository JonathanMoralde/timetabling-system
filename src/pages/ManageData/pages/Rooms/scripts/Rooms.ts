import { QTableProps } from 'quasar';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = ref([]);

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'room_name',
        required: true,
        label: 'Room Name',
        align: 'left',
        field: 'room_name',
        sortable: true,
      },
      {
        name: 'building_name',
        align: 'left',
        label: 'Building Name',
        field: 'building_name',
      },
      {
        name: 'department',
        align: 'center',
        label: 'Department',
        field: 'department',
      },
      {
        name: 'type',
        align: 'right',
        label: 'Type',
        field: 'type',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },
      {
        name: 'action',
        align: 'left',
        label: '',
        field: 'action',
        style: 'width: 10%',
      },
    ];
    return { text, selected, options, rows, columns };
  },
});
