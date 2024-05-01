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
          {{
            $route.params.departmentId ? 'Edit Department' : 'Add Departments'
          }}
        </h3>
      </div>

      <div v-show="!$route.params.departmentId">
        <!-- Import btn -->
        <q-btn
          :color="$q.dark.isActive ? 'white' : 'primary'"
          :text-color="$q.dark.isActive ? 'primary' : 'white'"
          label="Import"
          dense
          class="q-px-md q-py-xs"
          to="import-departments"
        />
      </div>
    </div>

    <!-- form -->
    <q-form
      @submit.prevent="shouldEdit ? handleEdit() : handleSubmit()"
      class="form-width"
    >
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
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Dean's Name -->
      <div class="q-mb-lg">
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
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
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

<script lang="ts" src="./scripts/AddDepartment.ts"></script>

<style scoped></style>
