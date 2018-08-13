<template>
  <v-app>

    <v-toolbar dark class="primary">

      <v-toolbar-side-icon
        class="hidden-sm-and-up"
        @click.native.stop="sideNav = !sideNav"
      ></v-toolbar-side-icon>

      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>

      <v-spacer />
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
        flat
        v-for="item in menuItems"
        :key="`btn + ${item.title}`"
        router
        :to="item.link"
        >
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

    </v-toolbar>

    <main>
      <router-view></router-view>
    </main>

    <v-navigation-drawer :absolute="true" v-model="sideNav">
      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups' },
        { icon: 'room', title: 'Oraganize Meetup', link: 'meetup/new' },
        { icon: 'person', title: 'Profile', link: '/profile' },
        { icon: 'face', title: 'Sign up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign in', link: '/signin' }
      ]
    }
  }
}
</script>
