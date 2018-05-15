<template>
  <v-page
    class="home"
    title="Recipes"
    loading-text="Loading recipes..."
    :loading="loading"
  >
    <recipe-listing
      show-favourite-star
      :recipes="recipes"
      :on-favourite-click="toggleFavourite"
    />
  </v-page>
</template>

<script>
  import RecipeListing from '@/components/RecipeListing.vue';
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Home',
    created() {
      this.fetchRecipes();
    },
    methods: {
      ...mapActions({
        fetchRecipes: 'recipes/fetch',
        toggleFavourite: 'recipes/toggleFavourite',
      }),
    },
    computed: {
      ...mapState({
        recipes: state => state.recipes.items,
        loading: state => state.recipes.loading,
      }),
    },
    components: {
      RecipeListing,
    },
  };
</script>

<style lang="scss" scoped>
  .home {
  }
</style>
