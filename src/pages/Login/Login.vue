<template>
  <div class="overflow-hidden">
    <header
      class="full-width custom-header-height flex justify-end items-center q-px-xl q-py-md"
    >
      <div class="q-pr-xl">
        <q-btn
          flat
          dense
          :icon="$q.dark.isActive ? 'dark_mode' : 'light_mode'"
          @click="$q.dark.toggle"
        />
      </div>
    </header>
    <main class="relative-position main-container full-width">
      <div
        class="custom-bg-1 absolute-bottom-left"
        :class="$q.dark.isActive ? 'bg-primary' : 'bg-white'"
      ></div>
      <div
        class="custom-bg-2 absolute-bottom-left"
        :class="$q.dark.isActive ? 'bg-dark' : 'bg-grey-4'"
      ></div>
      <section
        class="full-height full-width main-context-container q-px-xl row justify-between items-center"
      >
        <div class="q-pl-xl">
          <h1
            class="text-h2 q-ma-none text-bold q-mb-lg"
            :class="$q.dark.isActive ? 'text-white' : 'text-primary'"
          >
            Automated Class
          </h1>
          <h1 class="text-h2 q-ma-none text-bold custom-text-style q-mb-lg">
            Timetabling System
          </h1>
          <div
            class="custom-line q-mb-lg"
            :class="$q.dark.isActive ? 'bg-white' : 'bg-primary'"
          ></div>
          <p class="q-ma-none text-subtitle1">
            A web-based system that automates class schedules
          </p>
        </div>
        <div class="q-pr-xl auth-form-width">
          <q-card flat bordered class="q-px-lg q-pb-lg full-width q-mb-lg">
            <h3 class="text-h4 text-bold">Login</h3>
            <q-form @submit.prevent="handleSubmit">
              <!-- Email -->
              <div class="q-mb-md">
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

              <!-- Password -->
              <div class="q-mb-md">
                <q-item-label class="q-py-sm"
                  >Password <span class="text-red">*</span></q-item-label
                >
                <q-input
                  v-model="password"
                  dense
                  placeholder="Enter your password"
                  type="password"
                  :rules="[(val) => (val !== null && val !== '') || '']"
                  hide-bottom-space
                  outlined
                  :bg-color="$q.dark.isActive ? 'dark' : 'white'"
                />
              </div>

              <div class="row justify-between items-center q-mb-lg">
                <div>
                  <q-checkbox v-model="isRemember" label="Remember me" />
                </div>
                <p
                  class="q-ma-none cursor-pointer"
                  @click="$router.push('forgot-password')"
                >
                  Forgot Password
                </p>
              </div>

              <div class="row justify-center items-center">
                <q-btn
                  :loading="btnLoadingState"
                  label="Login"
                  type="submit"
                  :color="$q.dark.isActive ? 'white' : 'primary'"
                  :text-color="$q.dark.isActive ? 'primary' : 'white'"
                />
              </div>
            </q-form>
          </q-card>
          <div
            class="custom-line q-mx-auto"
            :class="$q.dark.isActive ? 'bg-white' : 'bg-primary'"
          ></div>
        </div>
      </section>
      <footer class="absolute-bottom-left q-px-xl q-py-lg">
        <div class="row q-px-xl">
          <p class="q-ma-none q-mr-xl">Terms & Conditions</p>
          <p class="q-ma-none">Privacy Policy</p>
        </div>
      </footer>
    </main>
  </div>
</template>

<script lang="ts" src="./scripts/Login.ts"></script>

<style scoped>
/* .custom-header-height {
  height: 10vh;
} */
.main-container {
  height: 91.28vh;
}
.custom-bg-1 {
  height: 100%;
  width: 58%;
  transform: rotateZ(36deg);
  margin-left: -8rem;
  margin-bottom: -6rem;
  z-index: -99;
  border-radius: 100%;
}
.custom-bg-2 {
  height: 95%;
  width: 54%;
  border-top-right-radius: 100%;
  border-top-left-radius: 85%;
  border-bottom-left-radius: 106%;
  transform: rotateZ(39deg);
  margin-left: -7rem;
  margin-bottom: -31rem;
  z-index: -9;
}
.custom-line {
  height: 6px;
  width: 40%;
  border-radius: 1rem;
}
</style>
