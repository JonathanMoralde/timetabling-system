import UploadFile from 'src/components/UploadFile.vue';
import { defineComponent, ref } from 'vue';
import { isFileSet } from 'src/composables/UploadFile';

export default defineComponent({
  components: { UploadFile },
  setup() {
    const uploadComponent = ref<any>(null);

    const files = ref<any>(null);

    const handleUpload = () => {
      if (!uploadComponent) {
        console.log('failed to upload');
        return;
      }
      if (!uploadComponent.value) {
        console.log('Please select a file first');
        return;
      }
      uploadComponent.value.uploadBtn.click();
      files.value = uploadComponent.value.importFile;
      console.log(files.value);
    };

    const handleCancel = () => {
      if (!uploadComponent) {
        console.log('failed to cancel');
        return;
      }

      uploadComponent.value.clearBtn.click();
      isFileSet.value = false;
    };

    return { uploadComponent, handleUpload, handleCancel, isFileSet };
  },
});
