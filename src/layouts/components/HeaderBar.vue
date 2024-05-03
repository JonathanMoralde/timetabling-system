<template>
  <q-header
    bordered
    class="q-px-xl"
    :class="$q.dark.isActive ? 'bg-dark-page' : 'bg-grey-3 text-black'"
  >
    <div class="row items-center q-py-md">
      <q-toolbar class="col q-pl-sm">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="ToggleLeftDrawer"
        />

        <q-toolbar-title class="text-subtitle1">
          Automated Class Timetabling System
        </q-toolbar-title>
      </q-toolbar>
      <!-- SEM & YEAR SELECT HERE -->
      <q-select
        v-model="activeSemSY"
        :options="options"
        label="Active SY & Sem"
        class="col-3 q-pr-md"
        dense
        emit-value
        map-options
        standout="bg-primary text-white"
        @update:model-value="
          (value) => {
            console.log(value);
            changeActive(value)
              .then((response) => {
                fetchSchedule();
                $q.notify({
                  message: response.data.message,
                  position: 'bottom',
                  color: 'positive',
                  textColor: 'accent',
                });
              })
              .catch((error) => {
                $q.notify({
                  type: 'negative',
                  message: error.message,
                  position: 'bottom',
                  color: 'negative',
                  textColor: 'accent',
                });
              });
          }
        "
      />
      <!-- <q-select
        v-model="selectedSY"
        :options="options"
        label="Active SY & Sem"
        class="col-3 q-pr-md"
        dense
        @update:model-value="
          (value) => {
            changeActiveSemSY(value);
          }
        "
        standout="bg-primary text-white"
      /> -->
    </div>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onBeforeMount } from 'vue';
import { ToggleLeftDrawer } from 'src/composables/Triggers';
import {
  SYSemData,
  activeSemSY,
  fetchSYSem,
  options,
  changeActive,
} from 'src/composables/SemSYSelect';
import { fetchSchedule } from 'src/composables/Schedule';
import { useQuasar } from 'quasar';
import { SYSem } from 'src/interface/interface';

export default defineComponent({
  setup() {
    onBeforeMount(() => {
      fetchSYSem().then((_) => {
        if (SYSemData.value) {
          const active: SYSem[] = SYSemData.value.filter((sysem) => {
            return sysem.status === 'active';
          });

          activeSemSY.value = active[0].school_year_semester_id;
        }
      });
    });

    const $q = useQuasar();

    return {
      ToggleLeftDrawer,
      options,
      activeSemSY,
      changeActive,
      fetchSchedule,
    };
  },
});
</script>

<style scoped></style>
