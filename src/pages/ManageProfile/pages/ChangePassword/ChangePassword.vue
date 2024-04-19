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
          bg-color="white"
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
          bg-color="white"
        />
      </div>

      <!-- Confirm Password -->
      <div class="q-mb-md">
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
          bg-color="white"
        />
      </div>

      <div>
        <q-btn label="Cancel" flat @click="$router.go(-1)" class="q-mr-md" />
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </main>
</template>

<script lang="ts" src="./scripts/ChangePassword.ts"></script>

<style scoped>
.form-width {
  width: 25%;
}
</style>
