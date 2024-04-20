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
      />
    </div>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { ToggleLeftDrawer } from 'src/composables/Triggers';
import {
  activeSemSY,
  options,
  changeActiveSemSY,
} from 'src/composables/SemSYSelect';
import { useQuasar } from 'quasar';

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const selectedSY = ref(
      computed(() => {
        return activeSemSY.value || '';
      })
    );
    return { $q, ToggleLeftDrawer, selectedSY, options, changeActiveSemSY };
  },
});
</script>

<style scoped></style>
