<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="ToggleLeftDrawer"
      />

      <q-toolbar-title> Automated Class Timetabling System </q-toolbar-title>

      <!-- SEM & YEAR SELECT HERE -->
      <!-- <div>Quasar v{{ $q.version }}</div> -->
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ToggleLeftDrawer } from 'src/composables/Triggers';

export default defineComponent({
  setup() {
    return { ToggleLeftDrawer };
  },
});
</script>

<style scoped></style>
