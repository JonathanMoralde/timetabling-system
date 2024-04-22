<template>
  <main>
    <!-- Title & Btn -->
    <div class="flex justify-between items-center q-mb-lg">
      <div class="flex items-center">
        <q-btn
          v-if="$route.params.fromManageInstructors"
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
          Create Instructor Account
        </h3>
      </div>

      <div>
        <!-- import btn -->
        <q-btn
          :color="$q.dark.isActive ? 'white' : 'primary'"
          :text-color="$q.dark.isActive ? 'primary' : 'white'"
          label="Import"
          dense
          class="q-px-md q-py-xs"
          :to="{ name: 'import-instructor' }"
        />
      </div>
    </div>

    <!-- form -->
    <q-form @submit.prevent="console.log('submitted')" class="form-width">
      <!-- Employee/School ID -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Employee/School ID <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="employeeSchoolID"
          dense
          placeholder="Employee/School ID"
          :rules="[(val) => (val !== null && val !== '') || '']"
          hide-bottom-space
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

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

      <!-- Research Status -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Research Status <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedResearchStatus"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="researchStatusOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
      </div>

      <!-- Academic Rank -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Academic Rank <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="academicRank"
          dense
          placeholder="Academic Rank"
          :rules="[(val) => (val !== null && val !== '') || '']"
          hide-bottom-space
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Title -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm">Title </q-item-label>
        <q-input
          v-model="title"
          dense
          placeholder="Title"
          hide-bottom-space
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Employment Status -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Employment Status <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedEmploymentStatus"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="employmentStatusOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
      </div>

      <!-- First Name -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >First Name <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="firstName"
          dense
          placeholder="First Name"
          hide-bottom-space
          :rules="[(val) => (val !== null && val !== '') || '']"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Middle Name -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Middle Name <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="middleName"
          dense
          placeholder="Middle Name"
          hide-bottom-space
          :rules="[(val) => (val !== null && val !== '') || '']"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Surname -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Surname <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="surName"
          dense
          placeholder="Surname"
          hide-bottom-space
          :rules="[(val) => (val !== null && val !== '') || '']"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Email -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Email <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="email"
          type="email"
          dense
          placeholder="Email"
          hide-bottom-space
          :rules="[(val) => (val !== null && val !== '') || '']"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Password -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Password <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="password"
          type="password"
          dense
          placeholder="Password"
          hide-bottom-space
          :rules="[(val) => (val !== null && val !== '') || '']"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Confirm Password -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Confirm Password <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="confirmPassword"
          type="password"
          dense
          placeholder="Confirm Password"
          hide-bottom-space
          :rules="[(val) => (val !== null && val !== '') || '']"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <div class="row justify-center items-center">
        <q-btn label="Cancel" flat @click="$router.go(-1)" class="q-mr-md" />
        <q-btn
          label="Submit"
          type="submit"
          :color="$q.dark.isActive ? 'white' : 'primary'"
          :text-color="$q.dark.isActive ? 'primary' : 'white'"
        />
      </div>
    </q-form>
  </main>
</template>

<script lang="ts" src="./scripts/Instructor.ts"></script>

<style scoped>
.form-width {
  width: 25%;
}
</style>
