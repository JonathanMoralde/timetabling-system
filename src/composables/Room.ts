import { ref, readonly } from 'vue';
import axios from 'axios';
import { Room } from 'src/interface/interface';

const SetRoom = ref<Room[]>([]);
const RoomData = readonly(SetRoom);

// Fetch rooms data
const fetchRoom = async () => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/fetch_all_room.php';

  await axios.get(url).then((response) => {
    SetRoom.value = response.data.data;
  });
};

// Insert room
const insertRoom = async (
  departmentId: string,
  buildingName: string,
  roomName: string,
  type: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/insert_room.php';

  const roomData = new FormData();
  roomData.append('departmentId', departmentId);
  roomData.append('buildingName', buildingName);
  roomData.append('roomName', roomName);
  roomData.append('type', type);

  try {
    const response = await axios.post(url, roomData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      maxBodyLength: Infinity,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

// Fetch indiv room
const fetchIndivRoom = async (roomId: string) => {
  const url = `http://localhost/timetable-system-backend/api/admin/managedata/fetch_indiv_room.php?roomId=${roomId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error; // Throw the error to be caught by the caller
  }
};

// Edit indiv department data
const updateRoom = async (
  roomId: string,
  departmentId: string,
  buildingName: string,
  roomName: string,
  roomType: string
) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/update_room.php';

  const newRoomData = new FormData();
  newRoomData.append('roomId', roomId);
  newRoomData.append('departmentId', departmentId);
  newRoomData.append('buildingName', buildingName);
  newRoomData.append('roomName', roomName);
  newRoomData.append('roomType', roomType);

  try {
    const response = await axios.post(url, newRoomData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      maxBodyLength: Infinity,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete department
const deleteRoom = async (roomId: string) => {
  const url =
    'http://localhost/timetable-system-backend/api/admin/managedata/delete_room.php';

  const roomData = new FormData();
  roomData.append('roomId', roomId);

  try {
    const response = await axios.post(url, roomData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      maxBodyLength: Infinity,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export {
  SetRoom,
  RoomData,
  fetchRoom,
  insertRoom,
  fetchIndivRoom,
  updateRoom,
  deleteRoom,
};
