<template>
  <main>
    <!-- Title & Btn -->
    <div class="flex justify-between items-center q-mb-lg">
      <div class="flex items-center">
        <q-btn
          @click="$router.go(-1)"
          round
          flat
          non-selectable
          no-outline
          q-btn--actionable
          icon="arrow_back"
          size="12px"
        />
        <h3 class="text-h5 q-ma-none text-bold" style="font-size: 2rem">
          Add Rooms
        </h3>
      </div>

      <div>
        <!-- export btn -->
        <q-btn
          color="primary"
          label="Import"
          dense
          class="q-px-md q-py-xs"
          @click="console.log('clicked')"
        />
      </div>
    </div>

    <!-- form -->
    <q-form @submit.prevent="console.log('submitted')" class="form-width">
      <!-- Department -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Department <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedDepartment"
          outlined
          bg-color="white"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="departmentOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
      </div>

      <!-- Building's Name -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Building Name <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="buildingName"
          dense
          placeholder="Building Name"
          :rules="[(val) => (val !== null && val !== '') || '']"
          hide-bottom-space
          outlined
          bg-color="white"
        />
      </div>

      <!-- Room's Name -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Room Name <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="roomName"
          dense
          placeholder="Room Name"
          :rules="[(val) => (val !== null && val !== '') || '']"
          hide-bottom-space
          outlined
          bg-color="white"
        />
      </div>

      <!-- Type -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Type <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedType"
          outlined
          bg-color="white"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="typeOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
      </div>
      <div>
        <q-btn label="Cancel" flat @click="$router.go(-1)" class="q-mr-md" />
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </main>
</template>

<script lang="ts" src="./scripts/AddRooms.ts"></script>

<style scoped>
@import './styles/AddRooms.scss';
</style>
