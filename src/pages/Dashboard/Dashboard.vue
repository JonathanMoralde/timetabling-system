<template>
  <main class="q-py-lg q-px-xl q-mx-md">
    <!-- title & btn -->
    <div class="flex justify-between items-center q-mb-lg">
      <h3 class="text-h5 q-ma-none text-bold" style="font-size: 2rem">
        Summary of Subject Load
      </h3>

      <div>
        <!-- add btn -->
        <!-- <q-btn
          :color="$q.dark.isActive ? 'white' : 'primary'"
          :text-color="$q.dark.isActive ? 'primary' : 'white'"
          label="Add Rooms"
          dense
          class="q-px-md q-py-xs q-mr-md"
          to="add-rooms"
        /> -->

        <!-- export btn -->
        <q-btn
          label="Export as PDF"
          dense
          class="q-px-md q-py-xs"
          :color="$q.dark.isActive ? 'white' : 'primary'"
          :text-color="$q.dark.isActive ? 'primary' : 'white'"
          @click="console.log('clicked')"
        />
      </div>
    </div>

    <!-- filters -->
    <div class="row q-mb-lg">
      <q-input
        outlined
        v-model="text"
        label="Search"
        dense
        class="col-2 q-mr-md"
        :bg-color="$q.dark.isActive ? 'dark' : 'white'"
      >
        <template v-slot:append>
          <q-icon
            v-if="text !== ''"
            name="close"
            class="cursor-pointer"
            @click="text = ''"
          />
          <q-icon name="search" />
        </template>
      </q-input>

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

    <section class="q-mb-lg">
      <div class="row q-mb-sm">
        <div class="col-6">
          <!-- Name -->
          <div class="row">
            <p class="col-3 text-bold">Name of Faculty:</p>
            <p class="col-3">Jonathan Moralde</p>
          </div>

          <!-- Academic Rank -->
          <div class="row">
            <p class="col-3 text-bold">Academic Rank:</p>
            <p class="col-3">Instructor I</p>
          </div>
        </div>

        <div class="col-6">
          <!-- Status of Appointment -->
          <div class="row">
            <p class="col-4 text-bold">Status of Appointment:</p>
            <p class="col-4">COS College</p>
          </div>

          <!-- College/Department -->
          <div class="row">
            <p class="col-4 text-bold">College/Department:</p>
            <p class="col-4">Computer Studies Department</p>
          </div>
        </div>
      </div>
      <q-table flat bordered :rows="rows" :columns="columns" row-key="name" />
    </section>
  </main>
</template>

<script lang="ts" src="./scripts/Dashboard.ts"></script>

<style scoped></style>
