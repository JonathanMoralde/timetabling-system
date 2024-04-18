<template>
  <q-header bordered class="bg-grey-3 text-black q-px-xl">
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
        standout
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
