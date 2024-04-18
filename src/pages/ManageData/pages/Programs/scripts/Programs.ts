import { QTableProps } from 'quasar';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const text = ref('');
    const selected = ref('test');
    const options = ['test', 'test2'];

    const rows = ref([]);

    // For table column
    let columns: QTableProps['columns'] = [
      {
        name: 'quotation_req_num',
        required: true,
        label: 'Quotation Req. Number',
        align: 'left',
        field: 'quotation_req_num',
        sortable: true,
      },
      {
        name: 'model',
        align: 'left',
        label: 'Model',
        field: 'model',
      },
      {
        name: 'quantity',
        align: 'center',
        label: 'Quantity',
        field: 'quantity',
      },
      {
        name: 'price_downpayment',
        align: 'right',
        label: 'Price/Downpayment',
        field: 'price_downpayment',
        // format: (val) => `₱ ${val.toLocaleString()}`,
      },

      {
        name: 'status',
        align: 'left',
        label: 'Status',
        field: 'status',
      },
      {
        name: 'action',
        align: 'left',
        label: '',
        field: 'action',
        style: 'width: 10%',
      },
    ];
    return { text, selected, options, rows, columns };
  },
});
