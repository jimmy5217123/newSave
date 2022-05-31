<template>
<div id="app">
    <v-row class="ma-0">
        <v-card height="90vh" width="256">
          <v-navigation-drawer permanent>
            <v-list-item class="light-blue lighten-5">
              <v-list-item-content>
                <v-list-item-title>
                  {{siteName}}
                </v-list-item-title>
                <v-list-item-subtitle class="text-subtitle-2">
                  啟用日期: 2022/05/31
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
      
            <v-divider></v-divider>
      
            <v-list dense nav>
              <v-list-item-group v-model="routerName" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i" @click="ChangeRouter(item.to)">
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
          
                  <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
        </v-card>
        <router-view />
    </v-row>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
  export default Vue.extend({
    name: 'RealTime',
    data () {
      return {
        siteName: '',
        items: [
          { title: '案場資訊', icon: 'mdi-view-dashboard', to: '', name: 'info'},
          { title: '裝置歷史資料', icon: 'mdi-image', to: 'history', name: 'history'},
          { title: '資料分析', icon: 'mdi-help-box', to: 'analysis', name: 'analysis' }
        ]
      }
    },
    created (): void {
      this.siteName = ( this.$router as any ).history.current.query.siteName
    },
    methods: {
      ChangeRouter (to: string) {
        ( this.$router as any ).push({ path: `/realTimeRouter/${to}`, query: ( this.$router as any ).history.current.query}).catch(err => {err})
      }
    },
    computed: {
      routerName: {
        get() : number {
          return this.items.findIndex(x => x.name === ( this.$router as any ).history.current.name)
        },
        set (): number {
          return this.items.findIndex(x => x.name === ( this.$router as any ).history.current.name)
        } 
      }
    }
  })
</script>
<style lang="scss" scoped>

</style>
