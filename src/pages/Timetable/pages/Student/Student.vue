<template>
  <main>
    <!-- title & btn -->
    <div class="flex justify-between items-center q-mb-lg">
      <h3 class="text-h5 q-ma-none text-bold" style="font-size: 2rem">
        Student Timetable
      </h3>

      <div>
        <!-- export btn -->
        <q-btn
          label="Export as PDF"
          dense
          outline
          class="q-px-md q-py-xs"
          :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'"
          :color="$q.dark.isActive ? 'white' : 'grey-10'"
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
        :bg-color="$q.dark.isActive ? 'dark' : 'white'"
      />
    </div>

    <section>
      <q-table
        flat
        bordered
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

<script lang="ts" src="./scripts/Student.ts"></script>

<style scoped></style>
