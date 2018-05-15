<template>
  <v-page
    class="favourites"
    title="Favourite recipes"
    loading-text="Loading recipes..."
    :loading="loading"
  >
    <template v-if="favouriteItems.length > 0">
      <recipe-listing
        show-favourite-star
        :recipes="favouriteItems"
        :on-favourite-click="toggleFavourite"
      />
      <div class="favourites__actions">
        <button
          class="button is-primary"
          @click="clearFavourites"
        >
          Remove all
        </button>
      </div>
    </template>

    <div class="notification" v-else>
      You don't have any favourite recipes.
    </div>
  </v-page>
</template>

<script>
  import RecipeListing from '@/components/RecipeListing.vue';
  import { mapActions, mapState, mapGetters } from 'vuex';

  export default {
    name: 'Favourites',
    created() {
      this.fetchRecipes();
    },
    methods: {
      ...mapActions({
        fetchRecipes: 'recipes/fetch',
        toggleFavourite: 'recipes/toggleFavourite',
        clearFavourites: 'recipes/clearFavourites',
      }),
    },
    computed: {
      ...mapState({
        recipes: state => state.recipes.items,
        loading: state => state.recipes.loading,
      }),
      ...mapGetters({
        favouriteItems: 'recipes/favouriteItems',
      }),
    },
    components: {
      RecipeListing,
    },
  };
</script>

<style lang="scss" scoped>
  .favourites {
    &__actions {
      padding-top: 20px;
    }
  }
</style>
