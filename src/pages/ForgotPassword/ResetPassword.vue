<template>
  <main class="flex justify-center items-center" style="min-height: 100vh">
    <section class="auth-form-width">
      <q-card flat bordered class="q-px-lg q-pb-lg full-width">
        <h3 class="text-h4 text-bold text-center">Reset Password</h3>
        <q-form @submit.prevent="handleSubmit">
          <!-- New Password -->
          <div class="q-mb-lg">
            <q-item-label class="q-py-sm"
              >New Password <span class="text-red">*</span></q-item-label
            >
            <q-input
              v-model="newPassword"
              dense
              placeholder="Enter new password"
              type="password"
              :rules="[(val) => (val !== null && val !== '') || '']"
              hide-bottom-space
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
              dense
              placeholder="Confirm password"
              type="password"
              :rules="[(val) => (val !== null && val !== '') || '']"
              hide-bottom-space
              outlined
              :bg-color="$q.dark.isActive ? 'dark' : 'white'"
            />
          </div>

          <div class="row justify-center items-center">
            <q-btn
              :loading="btnLoadingState"
              label="Reset Password"
              type="submit"
              :color="$q.dark.isActive ? 'white' : 'primary'"
              :text-color="$q.dark.isActive ? 'primary' : 'white'"
            />
          </div>
        </q-form>
      </q-card>
    </section>
  </main>
</template>

<script lang="ts" src="./scripts/ResetPassword.ts"></script>

<style scoped></style>
