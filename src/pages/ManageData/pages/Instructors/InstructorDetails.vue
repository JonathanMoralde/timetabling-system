<template>
  <main v-if="!pageLoadingState">
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
          Instructor Details
        </h3>
      </div>
    </div>

    <!-- Instructor Details -->
    <section class="q-mb-lg row">
      <div class="col-6">
        <!-- Name -->
        <div class="row">
          <p class="col-3 text-bold">Name of Faculty:</p>
          <p class="col-3">
            {{
              `${instructorData?.first_name} ${instructorData?.middle_name[0]}. ${instructorData?.surname}`
            }}
          </p>
        </div>

        <!-- Academic Rank -->
        <div class="row">
          <p class="col-3 text-bold">Academic Rank:</p>
          <p class="col-3">{{ instructorData?.academic_rank }}</p>
        </div>
      </div>

      <div class="col-6">
        <!-- Status of Appointment -->
        <div class="row">
          <p class="col-4 text-bold">Status of Appointment:</p>
          <p class="col-4">
            {{ instructorData?.employment_status }}
          </p>
        </div>

        <!-- College/Department -->
        <div class="row">
          <p class="col-4 text-bold">College/Department:</p>
          <p class="col-4">
            {{ instructorData?.department_name }}
          </p>
        </div>
      </div>
    </section>

    <!-- Assigned Course Table -->
    <section class="q-mb-lg">
      <q-table
        title="Assigned Courses"
        flat
        bordered
        :rows="assignedCourseData"
        :columns="assignedCourseColumns"
        row-key="courses_assigned_id"
        table-header-class="text-uppercase"
        ><template v-slot:body-cell-action="props">
          <q-td :props="props">
            <!-- Action Column -->
            <div>
              <q-btn
                :color="$q.dark.isActive ? 'white' : 'black'"
                icon="more_vert"
                flat
                round
                dense
                @click.stop
              >
                <q-menu
                  flat
                  :offset="[-5, 0]"
                  anchor="bottom left"
                  self="top right"
                  class="menu-container q-py-sm"
                >
                  <q-list data-cy="statusOptions" class="menu q-py-xs">
                    <!-- Delete -->
                    <q-item
                      clickable
                      v-close-popup
                      class="menu-list"
                      @click="handleDel(props.row.courses_assigned_id)"
                    >
                      <q-item-section>Delete</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </q-td>
        </template>
      </q-table>
    </section>
  </main>
  <q-inner-loading
    class="absolute-center bg-primary full-width full-height text-accent"
    :showing="pageLoadingState"
  />
</template>

<script lang="ts" src="./scripts/InstructorDetails.ts"></script>

<style scoped></style>
