<template>
  <div
    class="q-uploader-container q-pa-lg bg-dark"
    :class="$q.dark.isActive ? 'bg-dark' : 'bg-white'"
  >
    <q-uploader
      no-thumbnails
      square
      flat
      bordered
      accept=".xlsx"
      class="upload-box full-width"
      @added="isFileSet = true"
      @removed="isFileSet = false"
    >
      <template v-slot:header></template>
      <template v-slot:list="scope">
        <q-list separator class="upload-list full-height">
          <div
            v-if="scope.files.length === 0"
            class="column justify-end items-center full-height"
          >
            <div class="text-bold">Drag & drop files</div>
            <div class="q-mt-sm">
              <u class="cursor-pointer text-red">Browse on your device</u>
            </div>
          </div>
          <div v-else class="column justify-end items-center full-height">
            <div class="img-bg">
              <q-icon name="article" size="5rem" />
            </div>
            <div class="text-semibold">
              {{ scope.files[0].name }}
            </div>
            <div class="q-mt-md">Browse on your device</div>
          </div>
          <q-btn
            class="hidden"
            ref="clearBtn"
            @click="scope.removeFile(scope.files[0])"
            >clear</q-btn
          >
          <q-btn class="hidden" ref="uploadBtn" @click="UploadTask(scope.files)"
            >SUBMIT</q-btn
          >
          <q-uploader-add-trigger />
        </q-list>
      </template>
    </q-uploader>
    <p class="q-pt-md text-center q-ma-none text-caption">
      Note: Make sure the file is in .xls or .xlsx format
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { isFileSet } from 'src/composables/UploadFile';

export default defineComponent({
  setup() {
    const clearBtn = ref(null);
    const uploadBtn = ref(null);

    isFileSet.value = false;

    /**Store file from q-uploader to a variable*/
    const importFile = ref(null);

    const UploadTask = (files: any) => {
      importFile.value = files;
      isFileSet.value = true;
    };
    return { isFileSet, clearBtn, uploadBtn, importFile, UploadTask };
  },
});
</script>

<style scoped>
.q-uploader-container {
  border-width: 1px;
  border-style: solid;
}
.upload-box {
  height: 12rem;
  border-style: dashed !important;
  border-width: 3px;
  border-radius: 8px !important;
}
</style>
