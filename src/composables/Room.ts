import { ref, readonly } from 'vue';
import axios from 'axios';
import { Room } from 'src/interface/interface';

const SetRoom = ref<Room[]>([]);
const RoomData = readonly(SetRoom);

const fetchRoom = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_room.php';

  await axios.get(url).then((response) => {
    SetRoom.value = response.data.data;
  });
};

export { SetRoom, RoomData, fetchRoom };
