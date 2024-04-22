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
          Import
        </h3>
      </div>
    </div>

    <section class="row">
      <!-- Q-uploader -->
      <UploadFile ref="uploadComponent" class="col-4 q-mr-xl" />

      <!-- Download template & upload, cancel btn -->
      <div class="col-4 q-py-xl">
        <div class="">
          <div class="q-mb-lg">
            <u class="cursor-pointer text-red"> Download the template file </u>
            <p class="q-mt-sm">and fill in with the information</p>
          </div>

          <!-- BTN -->
          <div v-show="isFileSet">
            <q-btn label="Cancel" flat @click="handleCancel" class="q-mr-md" />
            <q-btn
              label="Upload"
              :color="$q.dark.isActive ? 'white' : 'primary'"
              :text-color="$q.dark.isActive ? 'primary' : 'white'"
              @click="handleUpload"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" src="./scripts/ImportCourses.ts"></script>

<style scoped></style>
