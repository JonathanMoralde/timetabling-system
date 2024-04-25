<template>
  <q-drawer
    v-model="LeftDrawerState"
    show-if-above
    :width="250"
    :breakpoint="400"
    class="bg-primary text-white"
  >
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 82px">
      <q-separator
        color="'#eeeeee3f'"
        class="q-mx-sm"
        style="margin-bottom: 18px; border-radius: 2rem"
      />
      <q-list padding class="q-mx-sm">
        <q-item
          clickable
          v-ripple
          :to="{ name: 'dashboard' }"
          active-class="text-accent active-bg"
          class=""
        >
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section> Dashboard </q-item-section>
        </q-item>

        <q-expansion-item
          group="drawerNav"
          icon="table_chart"
          label="Timetables"
          header-class="border-radius"
          expand-icon-class="text-grey-4"
        >
          <q-list>
            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'instructor' }"
              active-class="text-accent active-bg"
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
              active-class="text-accent active-bg"
            >
              <q-item-section avatar>
                <q-icon name="table_view" />
              </q-item-section>
              <q-item-section>Student</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'room' }"
              active-class="text-accent active-bg"
            >
              <q-item-section avatar>
                <q-icon name="table_view" />
              </q-item-section>
              <q-item-section>Rooms</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item
          group="drawerNav"
          icon="list"
          label="Manage Data"
          expand-icon-class="text-grey-4"
        >
          <q-list>
            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'departments' }"
              active-class="text-accent active-bg"
            >
              <q-item-section avatar>
                <q-icon name="groups" />
              </q-item-section>
              <q-item-section>Departments</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'rooms' }"
              active-class="text-accent active-bg"
            >
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
              active-class="text-accent active-bg"
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
              active-class="text-accent active-bg"
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
              active-class="text-accent active-bg"
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
              active-class="text-accent active-bg"
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
              active-class="text-accent active-bg"
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
              active-class="text-accent active-bg"
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
              active-class="text-accent active-bg"
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
          expand-icon-class="text-grey-4"
        >
          <q-list>
            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'create-admin' }"
              active-class="text-accent active-bg"
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
              active-class="text-accent active-bg"
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
              active-class="text-accent active-bg"
            >
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>
              <q-item-section>Student</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-expansion-item
          group="drawerNav"
          icon="manage_accounts"
          label="Manage Profile"
          expand-icon-class="text-grey-4"
        >
          <q-list>
            <q-item
              clickable
              v-ripple
              class="q-pl-xl"
              :to="{ name: 'edit-profile' }"
              active-class="text-accent active-bg"
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
              active-class="text-accent active-bg"
            >
              <q-item-section avatar>
                <q-icon name="password" />
              </q-item-section>
              <q-item-section>Change Password</q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>

        <q-item
          clickable
          v-ripple
          active-class="text-accent active-bg"
          @click="handleLogout"
        >
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>

          <q-item-section> Logout </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>

    <!-- <q-img
      class="absolute-top"
      src="https://cdn.quasar.dev/img/material.png"
      style="height: 150px"
    > -->
    <div class="absolute-top q-pa-sm q-pt-md">
      <div class="flex items-center">
        <q-avatar size="48px" class="q-mr-md">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
        <div>
          <div class="text-weight-bold">Jonathan Moralde</div>
          <div>Admin</div>
        </div>
      </div>
    </div>
    <!-- </q-img> -->

    <div class="absolute-bottom flex justify-center items-center q-pb-md">
      <div class="custom-box-shadow-inset">
        <q-btn
          flat
          dense
          :icon="isDark ? 'light_mode' : 'dark_mode'"
          :label="isDark ? 'Go with light version' : 'Go with dark version'"
          @click="toggleDarkMode"
          class="q-px-sm q-py-sm"
        />
      </div>
    </div>
  </q-drawer>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { LeftDrawerState } from 'src/composables/Triggers';
import { useQuasar } from 'quasar';
import axios from 'axios';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const isDark = computed(() => {
      return $q.dark.isActive;
    });

    const toggleDarkMode = () => {
      // toggle

      $q.dark.toggle();
    };

    const handleLogout = async () => {
      const userData = new FormData();
      userData.append('signout', 'true');
      const url =
        'http://localhost/timetable-system-backend/api/users/sign_out.php';
      // try {
      await axios
        .post(url, undefined, {
          maxBodyLength: Infinity,
          withCredentials: true,
        })
        .then((response) => {
          $q.notify({
            type: 'postive',
            message: response.data.message,
            position: 'bottom',
            color: 'positive',
            textColor: 'accent',
          });

          router.replace({ name: 'login' });
        })
        .catch((error) => {
          console.log(error);
          $q.notify({
            type: 'negative',
            message: error.response.data.error,
            position: 'bottom-right',
            color: 'negative',
            textColor: 'accent',
          });
        });
      // } catch (error) {
      //   console.log(error);
      //   $q.notify({
      //     type: 'negative',
      //     position: 'bottom-right',
      //     color: 'white',
      //     textColor: 'primary',
      //   });
      // }
    };
    return {
      LeftDrawerState,
      isDark,
      toggleDarkMode,
      handleLogout,
    };
  },
};
</script>

<style lang="scss" scoped>
.active-bg {
  background-color: #eeeeee4a;
  border-radius: 8px !important;
}
.q-focus-helper,
.q-focusable,
.q-manual-focusable,
.q-hoverable {
  border-radius: 8px !important;
}
:deep(.q-expansion-item) {
  .q-focus-helper {
    border-radius: 8px !important;
  }
}

.custom-box-shadow-inset {
  box-shadow: inset 0px -10px 20px -22px rgba(238, 238, 238, 0.59);
  border-radius: 8px;
}
</style>
