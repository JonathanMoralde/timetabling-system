<template>
  <q-header elevated class="row items-center">
    <q-toolbar class="col">
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
      standout
      v-model="selectedSY"
      :options="options"
      label="Active SY & Sem"
      class="col-3 q-pr-lg"
      :dark="true"
      dense
      @update:model-value="
        (value) => {
          changeActiveSemSY(value);
        }
      "
    />
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

export default defineComponent({
  setup() {
    const selectedSY = ref(
      computed(() => {
        return activeSemSY.value || '';
      })
    );
    return { ToggleLeftDrawer, selectedSY, options, changeActiveSemSY };
  },
});
</script>

<style scoped></style>
