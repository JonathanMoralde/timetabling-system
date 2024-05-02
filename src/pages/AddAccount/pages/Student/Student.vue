<template>
  <main>
    <!-- Title & Btn -->
    <div class="flex justify-between items-center q-mb-lg">
      <div class="flex items-center">
        <q-btn
          v-if="$route.params.fromManageStudents"
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
            $route.params.studentId ? 'Edit Student' : 'Create Student Accounts'
          }}
        </h3>
      </div>

      <div v-show="!$route.params.studentId">
        <!-- import btn -->
        <q-btn
          :color="$q.dark.isActive ? 'white' : 'primary'"
          :text-color="$q.dark.isActive ? 'primary' : 'white'"
          label="Import"
          dense
          class="q-px-md q-py-xs"
          :to="{ name: 'import-student' }"
        />
      </div>
    </div>

    <!-- form -->
    <q-form
      @submit.prevent="$route.params.studentId ? handleEdit() : handleSubmit()"
      class="form-width"
    >
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

      <!-- Student ID -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Student ID <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="studentID"
          dense
          placeholder="Student ID"
          :rules="[(val) => (val !== null && val !== '') || '']"
          hide-bottom-space
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Year Level -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Year Level <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedYearLevel"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="yearLevelOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
      </div>

      <!-- Block -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Block <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedBlock"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="blockOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
      </div>

      <!-- Program -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Program <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedProgram"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="programOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
      </div>

      <!-- Email -->
      <div class="q-mb-md" v-if="!$route.params.studentId">
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
      <div class="q-mb-md" v-if="!$route.params.studentId">
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
      <div class="q-mb-lg" v-if="!$route.params.studentId">
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
        <q-btn
          v-show="$route.params.fromManageStudents"
          label="Cancel"
          flat
          @click="$router.go(-1)"
          class="q-mr-md"
        />
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

<script lang="ts" src="./scripts/Student.ts"></script>

<style scoped>
.form-width {
  width: 25%;
}
</style>
