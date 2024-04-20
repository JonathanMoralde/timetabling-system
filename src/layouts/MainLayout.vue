<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderBar />

    <LeftDrawer />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LeftDrawer from './components/LeftDrawer.vue';
import HeaderBar from './components/HeaderBar.vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
    HeaderBar,
    LeftDrawer,
  },

  setup() {
    return {};
  },
});
</script>

<style lang="scss"></style>
