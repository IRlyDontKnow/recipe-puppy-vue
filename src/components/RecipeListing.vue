<template>
  <div class="recipe-listing">
    <recipe-block
      class="recipe-listing__item"
      v-for="recipe in recipes"
      :key="recipe.title"
      :recipe="recipe"
      :show-favourite-star="showFavouriteStar"
      :on-favourite-click="onFavouriteClick"
    />
  </div>
</template>

<script>
  import RecipeBlock from './RecipeBlock.vue';

  export default {
    name: 'RecipeListing',
    props: {
      recipes: {
        type: Array,
        required: true,
      },
      showFavouriteStar: Boolean,
      onFavouriteClick: Function,
    },
    components: {
      RecipeBlock,
    },
  };
</script>

<style lang="scss">
  .recipe-listing {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: -8px;

    &__item {
      margin: 8px;
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      &__item {
        width: calc(50% - 16px);
      }
    }

    @media screen and (min-width: 1088px) {
      padding: 0;

      &__item {
        $itemWidth: percentage(4/12);
        width: calc(#{$itemWidth} - 16px);
      }
    }
  }
</style>
