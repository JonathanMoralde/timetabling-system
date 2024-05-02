import { useQuasar } from 'quasar';
import { DepartmentData, fetchDepartment } from 'src/composables/Department';
import { fetchIndivRoom, insertRoom, updateRoom } from 'src/composables/Room';
import { Department, Room } from 'src/interface/interface';
import { defineComponent, ref, computed, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchDepartment();

      if (route.params.roomId) {
        const id: string = Array.isArray(route.params.roomId)
          ? route.params.roomId[0]
          : route.params.roomId;
        console.log(id);

        fetchIndivRoom(id).then((response) => {
          console.log(response);
          selectedDepartment.value = response.data[0].department_id;
          buildingName.value = response.data[0].building_name;
          roomName.value = response.data[0].room_name;
          selectedType.value = response.data[0].room_type;
        });
      }
    });

    const $q = useQuasar();
    const route = useRoute();
    const router = useRouter();
    const btnLoadingState = ref<boolean>(false);

    const selectedDepartment = ref<number | null>(null);
    const departmentOptions = computed(() => {
      const tempData = DepartmentData.value.map((department) => {
        return {
          label: department.department_name,
          value: department.department_id,
          description: department.department_name,
        };
      });
      console.log(tempData);

      return tempData || [];
    });
    const buildingName = ref<string>('');
    const roomName = ref<string>('');

    const selectedType = ref<string>('');
    const typeOptions: Array<string> = ['Lecture', 'Laboratory', 'Lec-Lab'];

    const handleSubmit = () => {
      btnLoadingState.value = true;
      insertRoom(
        selectedDepartment.value!.toString(),
        buildingName.value,
        roomName.value,
        selectedType.value
      )
        .then((response) => {
          console.log(response);
          $q.notify({
            message: response.data.message,
            position: 'bottom',
            color: 'positive',
            textColor: 'accent',
          });

          selectedDepartment.value = null;
          buildingName.value = '';
          roomName.value = '';
          selectedType.value = '';

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
    };

    const handleEdit = () => {
      btnLoadingState.value = true;

      const id: string = Array.isArray(route.params.roomId)
        ? route.params.roomId[0]
        : route.params.roomId;

      try {
        updateRoom(
          id,
          selectedDepartment.value!.toString(),
          buildingName.value,
          roomName.value,
          selectedType.value
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
      selectedDepartment,
      departmentOptions,
      buildingName,
      roomName,
      selectedType,
      typeOptions,
      handleSubmit,
      handleEdit,
      btnLoadingState,
    };
  },
});
