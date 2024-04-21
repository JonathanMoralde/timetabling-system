<template>
  <main>
    <!-- Title & Btn -->
    <div class="flex justify-between items-center q-mb-lg">
      <div>
        <h3 class="text-h5 q-ma-none text-bold" style="font-size: 2rem">
          Edit Profile
        </h3>
      </div>
    </div>

    <!-- form -->
    <q-form @submit.prevent="console.log('submitted')" class="form-width">
      <!-- Department -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Department <span class="text-red">*</span></q-item-label
        >
        <q-select
          v-model="selectedDepartment"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
          options-selected-class=" text-weight-medium bg-grey-4"
          dense
          emit-value
          map-options
          hide-bottom-space
          transition-show="scale"
          transition-hide="scale"
          :options="departmentOptions"
          :rules="[(val) => (val !== null && val !== '') || '']"
        >
        </q-select>
      </div>

      <!-- Position, Program (If applicable) -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Position, Program (If applicable)</q-item-label
        >
        <q-input
          v-model="positionProgram"
          dense
          placeholder="Position, Program"
          hide-bottom-space
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Title -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm">Title </q-item-label>
        <q-input
          v-model="title"
          dense
          placeholder="Title"
          hide-bottom-space
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- First Name -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >First Name <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="firstName"
          dense
          placeholder="First Name"
          hide-bottom-space
          :rules="[(val) => (val !== null && val !== '') || '']"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Middle Name -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Middle Name <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="middleName"
          dense
          placeholder="Middle Name"
          hide-bottom-space
          :rules="[(val) => (val !== null && val !== '') || '']"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Surname -->
      <div class="q-mb-md">
        <q-item-label class="q-py-sm"
          >Surname <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="surName"
          dense
          placeholder="Surname"
          hide-bottom-space
          :rules="[(val) => (val !== null && val !== '') || '']"
          outlined
          :bg-color="$q.dark.isActive ? 'dark' : 'white'"
        />
      </div>

      <!-- Email -->
      <div class="q-mb-lg">
        <q-item-label class="q-py-sm"
          >Email <span class="text-red">*</span></q-item-label
        >
        <q-input
          v-model="email"
          type="email"
          dense
          placeholder="Email"
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

<script lang="ts" src="./scripts/EditProfile.ts"></script>

<style scoped></style>
