<template>
  <div class="mx-5">
    <div style="display:flex; align-items:center" class="mt-2">
      <div style="width:30%;max-height:50px">
        <v-text-field
          placeholder="儲能案場"
          filled
          rounded
          dense
          prepend-inner-icon="mdi-magnify"
        ></v-text-field>
      </div>
      <div class="mx-10" style="font-weight:700">資料筆數: 22</div>
      <div style="margin-left:auto">
        <div style="font-weight:700">
          <span class="mx-0">排程狀態:</span>
          <span class="mx-5">
            <v-icon color='green' small class="mb-1 mx-1">
              {{'mdi-checkbox-marked-circle'}}
            </v-icon>
            <span>運轉中</span>
          </span>
          <span class="mx-5">
            <v-icon color='yellow' small class="mb-1 mx-1">
              {{'mdi-stop-circle'}}
            </v-icon>
            <span>待機中</span>
          </span>
          <span class="mx-5">
            <v-icon color='red' small class="mb-1 mx-1">
              {{'mdi-close-octagon'}}
            </v-icon>
            <span>停機中</span>
          </span>
        </div>
        <!-- <div>案場狀態</div> -->
      </div>
    </div>
    <v-card class="mb-5 cardBox" outlined elevation="2" v-for="x in 20" :key="x" @click="toInfoPage">
      <table style="width: 100%">
        <tr>
          <th v-for="i in factoryDataTitle" :key="i">{{i}}</th>
        </tr>
        <tr>
          <td>儲能案場</td>
          <td>15456</td>
          <td>15456</td>
          <td>15456</td>
          <td>15456</td>
          <td>15456</td>
          <td>15456</td>
          <td>15456</td>
          <td>
            <v-icon color='green' small>
              {{'mdi-checkbox-marked-circle'}}
            </v-icon>
          </td>
          <td>
            <v-icon color='green' small>
              {{'mdi-checkbox-marked-circle'}}
            </v-icon>
          </td>
        </tr>
      </table>
    </v-card>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'HelloWorld',

    data: () => ({
      factoryDataTitle: ['案場名稱', '建置容量(kWh)', '饋線容量(kW)​', 'SOC(%)', 'SOH(%)​', '充放電(+/-kW)​', '轉換效率(%)​', '直流功率(+/-kW)', '排程運轉中​', '案場狀態']
    }),
    methods: {
      toInfoPage () {
        const params = {
          siteName: 'test123',
        }
        this.$router.push({ path: 'realTimeRouter', replace: true, query: params })
      }
    },
  })
</script>

<style lang="scss" scoped>
  table {
    border-spacing: 1px;
    table-layout: fixed;
    cursor: pointer;
  }

  table tr{
    box-sizing: border-box;
    background-color: #cfeaff;
  }
  
  table th {
    padding: 2px;
    text-align: center;
    text-shadow: 2px 2px #316fae;
    background: linear-gradient(180deg,#3b679e,#207cca 8%,#2b88d9 18%,#207cca 31%,#7db9e8);
    color: #fff;
  }

  table td {
    padding: 2px;
    text-align: center;
    font-weight: 700;
  }
</style>
