<template>
  <div id="localScoreList">
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :pagination-options="{
        enabled: true,
        nextLabel: 'next',
        prevLabel: 'prev',
        perPageDropdownEnabled: false,
        ofLabel: '/'
      }"
      max-height="700px"
    />
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css';
import {VueGoodTable} from 'vue-good-table';
import store from "store";

export default {
  name: "LocalScoreList",
  components: { VueGoodTable },
  data() {
    return {
      columns: [
        {
          label: 'DateTime',
          field: 'dateTime',
        },
        {
          label: 'Type',
          field: 'dimension',
          filterOptions: {
            enabled: true,
            placeholder: '*',
            filterDropdownItems: ['2', '3', '4', '5', '6', '7', '8', '9'],
          },
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
    }
  },
  created() {
    store.each((value, key) => {
      if (value.seconds !== undefined) {
        this.rows.push({
          dateTime: key,
          dimension: value.dimension,
          steps: value.steps,
          seconds: value.seconds
        })
      }
      this.rows.sort((x, y) => {
        if (x.dateTime < y.dateTime) return 1;
        else if (x.dateTime > y.dateTime) return -1;
        return 0;
      })
    });
  }
}
</script>

<style scoped>

</style>
