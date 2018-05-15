<template>
  <v-page class="login">
    <template v-if="authenticated">
      <p class="login__info">You are already logged in!</p>
    </template>
    <template v-else>
      <p class="login__info">Just click login. No credentials required ;)</p>
      <button class="button" @click="handleLogin">
        Login!
      </button>
    </template>
  </v-page>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Login',
    props: {
      returnPath: String,
    },
    methods: {
      ...mapActions({
        login: 'auth/login',
      }),
      handleLogin() {
        const { login, returnPath, $router } = this;
        login();

        $router.push({ path: returnPath || '/' });
      },
    },
    computed: {
      ...mapState({
        authenticated: state => state.auth.authenticated,
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;

    &__info {
      margin-bottom: 20px;
    }
  }
</style>
