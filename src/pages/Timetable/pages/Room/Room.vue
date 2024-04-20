<template>
  <main>
    <!-- title & btn -->
    <div class="flex justify-between items-center q-mb-lg">
      <h3 class="text-h5 q-ma-none text-bold" style="font-size: 2rem">
        Room Timetable
      </h3>

      <div>
        <!-- export btn -->
        <q-btn
          color="grey-10"
          label="Export as PDF"
          dense
          outline
          class="q-px-md q-py-xs bg-white"
          @click="console.log('clicked')"
        />
      </div>
    </div>

    <!-- filters -->
    <div class="row q-mb-lg">
      <q-select
        outlined
        v-model="selected"
        :options="options"
        dense
        label="Square outlined"
        class="col-2"
        bg-color="white"
      />
    </div>

    <section>
      <q-table
        :rows="rows"
        :columns="columns"
        row-key="time_slot"
        :rows-per-page-options="[0]"
        :hide-pagination="true"
      >
      </q-table>
    </section>
  </main>
</template>

<script lang="ts" src="./scripts/Room.ts"></script>

<style scoped></style>
