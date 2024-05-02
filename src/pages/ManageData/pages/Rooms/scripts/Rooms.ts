import { QTableProps, useQuasar } from 'quasar';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';
import { RoomData, deleteRoom, fetchRoom } from 'src/composables/Room';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchRoom();
    });

    const $q = useQuasar();

    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = computed(() => {
      return RoomData.value || [];
    });

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'room_name',
        required: true,
        label: 'Room Name',
        align: 'center',
        field: 'room_name',
        sortable: true,
      },
      {
        name: 'building_name',
        align: 'center',
        label: 'Building Name',
        field: 'building_name',
      },
      {
        name: 'department_name',
        align: 'center',
        label: 'Department',
        field: 'department_name',
      },
      {
        name: 'room_type',
        align: 'center',
        label: 'Type',
        field: 'room_type',
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

    // for delete
    const handleDel = (roomId: string) => {
      deleteRoom(roomId)
        .then((response) => {
          $q.notify({
            message: response.data.message,
            position: 'bottom',
            color: 'positive',
            textColor: 'accent',
          });
          fetchRoom();
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
