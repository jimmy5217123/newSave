<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/acme-logo.png"
          transition="scale-transition"
          width="120"
        />
        <h3>雲端儲能監控中心</h3>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>
    <v-row class="my-auto">
      <v-navigation-drawer v-model="drawer" permanent expand-on-hover>
        <v-list-item class="px-2">
          <v-list-item-avatar>
          </v-list-item-avatar>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" :to="item.link" link class="mx-1">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-col>
        <v-main>
          <router-view/>
        </v-main>
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data () {
    return {
      drawer: true,
      items: [
        { title: '即時資訊', icon: 'mdi-home-city', link: '/' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ]
    }
  },
});
</script>
