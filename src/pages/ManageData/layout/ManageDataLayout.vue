<template>
  <q-layout view="hHr LpR lFf">
    <q-page-container class="q-py-lg q-px-xl q-mx-md">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
