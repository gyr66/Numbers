<template>
  <div id="remoteScoreList">
    <vue-good-table
      mode="remote"
      :columns="columns"
      :rows="rows"
      :totalRows="totalRecords"
      :pagination-options="{
        enabled: true,
        perPage: 5,
        perPageDropdown: [1, 5, 10, 100],
        dropdownAllowAll: false,
        nextLabel: 'next',
        prevLabel: 'prev',
        ofLabel: '/',

      }"
      :sort-options="{
        enabled: false
      }"
      @on-page-change="onPageChange"
      @on-per-page-change="onPerPageChange"
      max-height="700px"
      compactMode
    />
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css';
import {VueGoodTable} from 'vue-good-table';
import request from "@/network"

export default {
  name: "RemoteScoreList",
  components: { VueGoodTable },
  data() {
    return {
      columns: [
        {
          label: 'DateTime',
          field: 'date',
        },
        {
          label: 'IP',
          field: 'ip'
        },
        {
          label: 'Type',
          field: 'type',
          type: 'number'
        },
        {
          label: 'Steps',
          field: 'steps',
          type: 'number',
        },
        {
          label: 'Seconds',
          field: 'seconds',
          type: 'number',
        },
      ],
      rows: [],
      serverParams: {
        page: 1,
        perPage: 5
      },
      totalRecords: 0,
      isLoading: false
    }
  },
  created() {
    this.loadItems();
  },
  methods: {
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },

    onPageChange(params) {
      this.updateParams({page: params.currentPage});
      this.loadItems();
    },

    loadItems() {
      request.getRecords(this.serverParams).then(response => {
        this.rows = response.data.extend.pageInfo.list;
        this.totalRecords = response.data.extend.pageInfo.total;
      });
    },

    onPerPageChange(params) {
      console.log(params.currentPerPage)
      this.updateParams({perPage: params.currentPerPage});
      this.loadItems();
    },
  }
}
</script>

<style scoped>

</style>
