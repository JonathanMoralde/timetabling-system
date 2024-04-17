<template>
  <q-drawer
    v-model="LeftDrawerState"
    show-if-above
    :width="250"
    :breakpoint="400"
  >
    <q-scroll-area
      style="
        height: calc(100% - 150px);
        margin-top: 150px;
        border-right: 1px solid #ddd;
      "
    >
      <q-list padding>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section> Dashboard </q-item-section>
        </q-item>

        <q-item active clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="table_chart" />
          </q-item-section>

          <q-item-section> Timetables </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>

          <q-item-section> Manage Data </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="person_add" />
          </q-item-section>

          <q-item-section> Add Accounts </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="manage_accounts" />
          </q-item-section>

          <q-item-section> Manage Profile </q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>

          <q-item-section> Logout </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-img
      class="absolute-top"
      src="https://cdn.quasar.dev/img/material.png"
      style="height: 150px"
    >
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
        <div class="text-weight-bold">Jonathan Moralde</div>
        <div>Admin</div>
      </div>
    </q-img>
  </q-drawer>
</template>

<script lang="ts">
import { ref } from 'vue';
import { LeftDrawerState } from 'src/composables/Triggers';
export default {
  setup() {
    return {
      LeftDrawerState,
    };
  },
};
</script>

<style lang="scss" scoped></style>
