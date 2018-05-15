<template>
  <div id="app">
    <app-navbar
      :authenticated="authenticated"
      :on-logout="logout"
    />
    <div class="container">
      <transition name="fade" mode="out-in" appear>
       <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
  import AppNavbar from '@/components/layout/AppNavbar.vue';
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'App',
    methods: {
      ...mapActions({
        logout: 'auth/logout',
      }),
    },
    computed: {
      ...mapState({
        authenticated: state => state.auth.authenticated,
      }),
    },
    components: {
      AppNavbar,
    },
  };
</script>

<style lang="scss">
  @import './styles/main.scss';
</style>
