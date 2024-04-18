<template>
  <q-layout view="hHr LpR lFf" class="bg-grey-3">
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
