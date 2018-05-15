<template>
  <nav class="app-navbar navbar is-info" role="navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          class="app-navbar__brand-name navbar-item"
          :to="{ name: 'home'}"
        >
          RecipePuppy
        </router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link
            exact
            class="navbar-item"
            active-class="is-active"
            v-for="item in menuItems"
            :key="item.label"
            :to="item.to"
          >
            {{ item.label }}
          </router-link>
        </div>
        <div class="navbar-end">
          <router-link
            class="navbar-item"
            v-if="!authenticated"
            :to="{ name: 'login'}"
          >
            Log in!
          </router-link>
          <template v-else>
            <div class="navbar-item">
              <span class="app-navbar__user-hello">
                Hello user!
              </span>
              <button class="button is-primary" @click="onLogout">
                Logout
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'AppNavbar',
    props: {
      onLogout: {
        type: Function,
        required: true,
      },
      authenticated: Boolean,
    },
    data() {
      return {
        menuItems: [
          {
            to: { name: 'home' },
            label: 'Home',
          },
          {
            to: { name: 'favourites' },
            label: 'Favourites',
          },
          {
            to: { name: 'addRecipe' },
            label: 'Add Recipe',
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  .app-navbar {
    margin-bottom: 1rem;

    &__brand-name {
      font-size: 1.1rem;
      font-weight: 600;
    }

    &__user-hello {
      display: inline-block;
      margin-right: 10px;
    }
  }
</style>
