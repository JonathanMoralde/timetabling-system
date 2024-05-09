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
        v-model="selectedDepartment"
        :options="departmentOptions"
        clearable
        dense
        emit-value
        map-options
        hide-bottom-space
        transition-show="scale"
        transition-hide="scale"
        label="Select Department"
        class="col-2 span-fix"
        :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        @update:model-value="
          (value) => {
            handleUpdate(value);
          }
        "
      />
    </div>

    <section>
      <!-- <q-table flat bordered :rows="rows" :columns="columns" row-key="name" /> -->
      <div v-if="data.length == 0 && text" class="text-center">
        <p>Unable to find results for "{{ text }}""</p>
      </div>
      <div v-if="data.length == 0 && !text" class="text-center">
        <p>No data available</p>
      </div>

      <!-- <div> -->
      <div v-for="(instructor, index) in data" :key="index" class="q-mb-lg">
        <div class="row q-mb-sm">
          <div class="col-6">
            <!-- Name -->
            <div class="row">
              <p class="col-3 text-bold">Name of Faculty:</p>
              <p class="col-3">
                {{
                  `${instructor.first_name} ${instructor.middle_name[0]}. ${instructor.surname}`
                }}
              </p>
            </div>

            <!-- Academic Rank -->
            <div class="row">
              <p class="col-3 text-bold">Academic Rank:</p>
              <p class="col-3">{{ instructor.academic_rank }}</p>
            </div>
          </div>

          <div class="col-6">
            <!-- Status of Appointment -->
            <div class="row">
              <p class="col-4 text-bold">Status of Appointment:</p>
              <p class="col-4">{{ instructor.employment_status }}</p>
            </div>

            <!-- College/Department -->
            <div class="row">
              <p class="col-4 text-bold">College/Department:</p>
              <p class="col-4">{{ instructor.department_name }}</p>
            </div>
          </div>
        </div>

        <q-markup-table flat bordered>
          <thead>
            <tr>
              <template v-for="(column, index) in columns" :key="index">
                <th :class="`text-${column.align} text-uppercase`">
                  {{ column.label }}
                </th>
              </template>
            </tr>
          </thead>
          <tbody>
            <template
              v-for="(schedule, index) in instructor.schedules"
              :key="index"
            >
              <tr>
                <td>{{ schedule.course_code }}</td>
                <td>{{ schedule.course_name }}</td>
                <td class="text-center">
                  {{ `${schedule.start_time} - ${schedule.end_time}` }}
                </td>
                <td class="text-center">{{ schedule.day }}</td>
                <td>{{ schedule.room_name }}</td>
                <td class="text-center">
                  {{ (+schedule.lec_unit || 0) + (+schedule.lab_unit || 0) }}
                </td>

                <td class="text-center">{{ schedule.load_unit }}</td>
                <td class="text-center">
                  {{
                    `${schedule.abbreviation}${schedule.year_level}${schedule.block}`
                  }}
                </td>
              </tr>
            </template>
            <tr>
              <td colspan="5" class="text-center class=text-center">TOTAL</td>
              <td class="text-center">
                {{ calculateTotal(instructor.schedules, false) }}
              </td>
              <td class="text-center">
                {{ calculateTotal(instructor.schedules, true) }}
              </td>
              <td></td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </section>
  </main>
</template>

<script lang="ts" src="./scripts/SubjectLoad.js"></script>

<style scoped></style>
