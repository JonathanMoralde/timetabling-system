<template>
  <main>
    <!-- Title & Btn -->
    <div class="flex justify-between items-center q-mb-lg">
      <div>
        <h3 class="text-h5 q-ma-none text-bold" style="font-size: 2rem">
          Change Password
        </h3>
      </div>
    </div>

    <!-- form -->
    <q-form @submit.prevent="console.log('submitted')" class="form-width">
      <!-- Current Password -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Current Password <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="currentPassword"
          type="password"
          dense
          placeholder="Current Password"
          hide-bottom-space
          :rules="[(val) => (val !== null && val !== '') || '']"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- New Password -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >New Password <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="newPassword"
          type="password"
          dense
          placeholder="New Password"
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

<script lang="ts" src="./scripts/ChangePassword.ts"></script>

<style scoped></style>
