<template>
  <main class="flex justify-center items-center" style="min-height: 100vh">
    <section class="auth-form-width">
      <q-card flat bordered class="q-px-lg q-pb-lg full-width">
        <h3 class="text-h4 text-bold text-center">Forgot Password?</h3>
        <q-form @submit.prevent="handleSubmit">
          <!-- Email -->
          <div class="q-mb-lg">
            <q-item-label class="q-py-sm"
              >Email <span class="text-red">*</span></q-item-label
            >
            <q-input
              v-model="email"
              dense
              placeholder="Enter your email"
              type="email"
              :rules="[(val) => (val !== null && val !== '') || '']"
              hide-bottom-space
              outlined
              :bg-color="$q.dark.isActive ? 'dark' : 'white'"
            />
          </div>

          <div class="row justify-center items-center">
            <q-btn
              label="Cancel"
              flat
              @click="$router.go(-1)"
              class="q-mr-md"
            />
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

<script lang="ts" src="./scripts/ForgotPassword.ts"></script>

<style scoped></style>
