<template>
  <main class="manage-rooms">
    <!-- title & btn -->
    <div class="flex justify-between items-center q-mb-lg">
      <h3 class="text-h5 q-ma-none text-bold" style="font-size: 2rem">
        Manage Programs
      </h3>

      <div>
        <!-- add btn -->
        <q-btn
          color="primary"
          label="Add Rooms"
          dense
          class="q-px-md q-py-xs q-mr-md"
          @click="console.log('clicked')"
        />

        <!-- export btn -->
        <q-btn
          color="grey-10"
          label="Export as Excel"
          dense
          outline
          class="q-px-md q-py-xs bg-white"
          @click="console.log('clicked')"
        />
      </div>
    </div>

    <!-- filters -->
    <div class="row q-mb-lg">
      <q-input
        outlined
        v-model="text"
        label="Label"
        dense
        class="col-2 q-mr-md"
        bg-color="white"
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
        bg-color="white"
      />
    </div>

    <section>
      <q-table :rows="rows" :columns="columns" row-key="name" />
    </section>
  </main>
</template>

<script lang="ts" src="./scripts/Programs.ts"></script>

<style scoped></style>
