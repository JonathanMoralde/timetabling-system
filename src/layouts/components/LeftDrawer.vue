<template>
  <q-drawer
    v-model="LeftDrawerState"
    show-if-above
    :width="250"
    :breakpoint="400"
  >
    <q-scroll-area
      style="
        height: calc(100% - 150px);
        margin-top: 150px;
        border-right: 1px solid #ddd;
      "
    >
      <q-list padding>
        <q-item clickable v-ripple :to="{ name: 'dashboard' }">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section> Dashboard </q-item-section>
        </q-item>

        <q-expansion-item
          group="drawerNav"
          icon="table_chart"
          label="Timetables"
        >
          <q-list>
            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'instructor' }"
            >
              <q-item-section avatar>
                <q-icon name="table_view" />
              </q-item-section>
              <q-item-section>Instructor</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'student' }"
            >
              <q-item-section avatar>
                <q-icon name="table_view" />
              </q-item-section>
              <q-item-section>Student</q-item-section>
            </q-item>

            <q-item clickable v-ripple class="q-pl-xl" :to="{ name: 'room' }">
              <q-item-section avatar>
                <q-icon name="table_view" />
              </q-item-section>
              <q-item-section>Rooms</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item group="drawerNav" icon="list" label="Manage Data">
          <q-list>
            <q-item clickable v-ripple class="q-pl-xl" :to="{ name: 'rooms' }">
              <q-item-section avatar>
                <q-icon name="meeting_room" />
              </q-item-section>
              <q-item-section>Rooms</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'programs' }"
            >
              <q-item-section avatar>
                <q-icon name="school" />
              </q-item-section>
              <q-item-section>Programs</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'curriculum' }"
            >
              <q-item-section avatar>
                <q-icon name="history_edu" />
              </q-item-section>
              <q-item-section>Curriculum</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'course-type' }"
            >
              <q-item-section avatar>
                <q-icon name="edit_note" />
              </q-item-section>
              <q-item-section>Course Types</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'courses' }"
            >
              <q-item-section avatar>
                <q-icon name="subject" />
              </q-item-section>
              <q-item-section>Courses</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'students' }"
            >
              <q-item-section avatar>
                <q-icon name="group" />
              </q-item-section>
              <q-item-section>Students</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'instructors' }"
            >
              <q-item-section avatar>
                <q-icon name="supervisor_account" />
              </q-item-section>
              <q-item-section>Instructors</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'schedules' }"
            >
              <q-item-section avatar>
                <q-icon name="schedule" />
              </q-item-section>
              <q-item-section>Schedules</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item
          group="drawerNav"
          icon="person_add"
          label="Add Accounts"
        >
          <q-list>
            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'create-admin' }"
            >
              <q-item-section avatar>
                <q-icon name="person_3" />
              </q-item-section>
              <q-item-section>Admin</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'create-instructor' }"
            >
              <q-item-section avatar>
                <q-icon name="person_2" />
              </q-item-section>
              <q-item-section>Instructor</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'create-student' }"
            >
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>
              <q-item-section>Student</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <!-- <q-item clickable v-ripple :to="{ name: 'edit-profile' }">
          <q-item-section avatar>
            <q-icon name="manage_accounts" />
          </q-item-section>

          <q-item-section> Edit Profile </q-item-section>
        </q-item> -->
        <q-expansion-item
          group="drawerNav"
          icon="manage_accounts"
          label="Manage Profile"
        >
          <q-list>
            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'edit-profile' }"
            >
              <q-item-section avatar>
                <q-icon name="edit" />
              </q-item-section>
              <q-item-section>Edit Profile</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'change-password' }"
            >
              <q-item-section avatar>
                <q-icon name="password" />
              </q-item-section>
              <q-item-section>Change Password</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>

          <q-item-section> Logout </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <q-img
      class="absolute-top"
      src="https://cdn.quasar.dev/img/material.png"
      style="height: 150px"
    >
      <div class="absolute-bottom bg-transparent">
        <q-avatar size="56px" class="q-mb-sm">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
        <div class="text-weight-bold">Jonathan Moralde</div>
        <div>Admin</div>
      </div>
    </q-img>
  </q-drawer>
</template>

<script lang="ts">
import { ref } from 'vue';
import { LeftDrawerState } from 'src/composables/Triggers';
export default {
  setup() {
    return {
      LeftDrawerState,
    };
  },
};
</script>

<style lang="scss" scoped></style>
