<template>
  <main>
    <!-- title & btn -->
    <div class="flex justify-between items-center q-mb-lg">
      <h3 class="text-h5 q-ma-none text-bold" style="font-size: 2rem">
        Student Timetable
      </h3>

      <div>
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
      <q-select
        outlined
        v-model="selectedProgram"
        :options="programOptions"
        dense
        emit-value
        map-options
        hide-bottom-space
        transition-show="scale"
        transition-hide="scale"
        label="Select Program"
        class="col-2 q-mr-md"
        :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        @update:model-value="
          (value) => {
            handleUpdate();
          }
        "
      />

      <q-select
        outlined
        v-model="selectedYearLevel"
        :options="yearLevelOptions"
        dense
        emit-value
        map-options
        hide-bottom-space
        transition-show="scale"
        transition-hide="scale"
        label="Select YearLevel"
        class="col-2 q-mr-md"
        :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        @update:model-value="
          (value) => {
            handleUpdate();
          }
        "
      />

      <q-select
        outlined
        v-model="selectedBlock"
        :options="blockOptions"
        dense
        emit-value
        map-options
        hide-bottom-space
        transition-show="scale"
        transition-hide="scale"
        label="Select Block"
        class="col-2"
        :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        @update:model-value="
          (value) => {
            handleUpdate();
          }
        "
      />
    </div>

    <section>
      <q-markup-table flat bordered dense separator="none">
        <thead>
          <tr class="q-tr--no-hover">
            <th
              v-for="(column, index) in columns"
              :key="index"
              :class="`text-${column.align} text-uppercase`"
            >
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(time, index) in times"
            :key="index"
            class="q-tr--no-hover"
          >
            <td class="text-center">
              {{ time }}
            </td>
            <template v-for="(day, index) in daysOfWeek" :key="index">
              <td
                v-if="checkSpanTrack(time, day)"
                :class="checkColor(time, day)"
                class="text-center"
                v-html="displaySched(time, day)"
                :rowspan="calculateRowspan(time, day)"
              ></td>
            </template>
          </tr>
        </tbody>
      </q-markup-table>
    </section>
  </main>
</template>

<script lang="ts" src="./scripts/Student.ts"></script>

<style scoped>
.borderedCell {
  border: solid 1px rgba(255, 255, 255, 0.28);
}
</style>
