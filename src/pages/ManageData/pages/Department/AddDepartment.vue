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
          Add Departments
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
      <!-- Department's Name -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Department Name <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="departmentName"
          dense
          placeholder="Department Name"
          :rules="[(val) => (val !== null && val !== '') || '']"
          hide-bottom-space
          outlined
          bg-color="white"
        />
      </div>

      <!-- Dean's Name -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Dean's Name <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="deanName"
          dense
          placeholder="Dean's Name"
          :rules="[(val) => (val !== null && val !== '') || '']"
          hide-bottom-space
          outlined
          bg-color="white"
        />
      </div>

      <div>
        <q-btn label="Cancel" flat @click="$router.go(-1)" class="q-mr-md" />
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </main>
</template>

<script lang="ts" src="./scripts/AddDepartment.ts"></script>

<style scoped>
.form-width {
  width: 25%;
}
</style>
