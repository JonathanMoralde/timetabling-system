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
          class="q-mr-sm"
        />
        <h3 class="text-h5 q-ma-none text-bold" style="font-size: 2rem">
          {{ $route.params.roomId ? 'Edit Room' : 'Add Rooms' }}
        </h3>
      </div>

      <div v-show="!$route.params.roomId">
        <!-- Import  btn -->
        <q-btn
          :color="$q.dark.isActive ? 'white' : 'primary'"
          :text-color="$q.dark.isActive ? 'primary' : 'white'"
          label="Import"
          dense
          class="q-px-md q-py-xs"
          to="import-rooms"
        />
      </div>
    </div>

    <!-- form -->
    <q-form
      @submit.prevent="$route.params.roomId ? handleEdit() : handleSubmit()"
      class="form-width"
    >
      <!-- Department -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Department <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedDepartment"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
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
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
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
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
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
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
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
      <div class="row justify-center items-center">
        <q-btn label="Cancel" flat @click="$router.go(-1)" class="q-mr-md" />
        <q-btn
          :loading="btnLoadingState"
          label="Submit"
          type="submit"
          :color="$q.dark.isActive ? 'white' : 'primary'"
          :text-color="$q.dark.isActive ? 'primary' : 'white'"
        />
      </div>
    </q-form>
  </main>
</template>

<script lang="ts" src="./scripts/AddRooms.ts"></script>

<style scoped></style>
