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
          {{ $route.params.scheduleId ? 'Edit Schedule' : 'Add Schedules' }}
        </h3>
      </div>

      <div v-show="!$route.params.scheduleId">
        <!-- Automate btn -->
        <q-btn
          :color="$q.dark.isActive ? 'white' : 'primary'"
          :text-color="$q.dark.isActive ? 'primary' : 'white'"
          label="Automate Scheduling"
          dense
          class="q-px-md q-py-xs q-mr-md"
          @click="console.log('clicked')"
        />
        <!-- import btn -->
        <q-btn
          :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'"
          :color="$q.dark.isActive ? 'white' : 'grey-10'"
          label="Import"
          outline
          dense
          class="q-px-md q-py-xs"
          to="import-schedules"
        />
      </div>
    </div>

    <!-- form -->
    <q-form
      @submit.prevent="$route.params.scheduleId ? handleEdit() : handleSubmit()"
      class="form-width"
    >
      <!-- Instructor -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Instructor <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedInstructor"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="instructorOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
      </div>

      <!-- Course -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Course <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedCourse"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="courseOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
      </div>

      <!-- Room -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Room <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedRoom"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="roomOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
      </div>

      <!-- Type -->
      <div class="q-mb-md">
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

      <!-- Program -->
      <div class="q-mb-md">
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

      <!-- Year Level -->
      <div class="q-mb-md">
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
      <div class="q-mb-md">
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

      <!-- Day -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Day <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedDay"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="dayOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
      </div>

      <!-- Start Time -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Start Time <span class="text-red">*</span></q-item-label
        >
        <q-input
          placeholder="00:00 AM"
          outlined
          dense
          v-model="startTime"
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="startTime" mask="hh:mm A">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <!-- End Time -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >End Time <span class="text-red">*</span></q-item-label
        >
        <q-input
          placeholder="00:00 AM"
          outlined
          dense
          v-model="endTime"
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-time v-model="endTime" mask="hh:mm A">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <!-- School Year & Semester -->
      <!-- <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >School Year & Semester <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedSYSem"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="SYSemOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
      </div> -->

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

<script lang="ts" src="./scripts/AddSchedules.ts"></script>

<style scoped></style>
