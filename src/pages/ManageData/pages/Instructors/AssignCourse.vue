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
          {{ $route.params.instructorName }}
        </h3>
      </div>
    </div>

    <!-- form -->
    <q-form @submit.prevent="handleSubmit" class="form-width q-mb-xl">
      <!-- Department's Name -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Assign Courses<span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedCourses"
          multiple
          :options="coursesOptions"
          use-chips
          stack-label
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          outlined
          :rules="[(val) => (val !== null && val !== '') || '']"
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

    <section>
      <q-table
        title="Assigned Courses"
        flat
        bordered
        :rows="rows"
        :columns="columns"
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
        </template></q-table
      >
    </section>
  </main>
</template>

<script lang="ts" src="./scripts/AssignCourse.ts"></script>

<style scoped></style>
