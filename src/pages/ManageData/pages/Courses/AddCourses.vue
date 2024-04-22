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
          Add Course Type
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
          to="import-courses"
        />
      </div>
    </div>

    <!-- form -->
    <q-form @submit.prevent="console.log('submitted')" class="form-width">
      <!-- Course Code -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Course Code <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="courseCode"
          dense
          placeholder="Course Code"
          :rules="[(val) => (val !== null && val !== '') || '']"
          hide-bottom-space
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Course Type -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Course Type <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedCourseType"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="courseTypeOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
      </div>

      <!-- Course Name -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Course Name <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="courseName"
          dense
          placeholder="Course Name"
          :rules="[(val) => (val !== null && val !== '') || '']"
          hide-bottom-space
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Curriculum -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Curriculum <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedCurriculum"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="curriculumOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
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

      <!-- Semester -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Semester <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedSemester"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="semesterOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
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

<script lang="ts" src="./scripts/AddCourses.ts"></script>

<style scoped></style>
