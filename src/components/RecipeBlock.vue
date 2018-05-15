<template>
  <div class="recipe-block">
    <a
      class="recipe-block__star"
      href="#"
      v-if="showFavouriteStar"
      @click.prevent="handleFavouriteClick"
    >
      <i class="fa" :class="{ 'fa-star': recipe.favourite, 'fa-star-o': !recipe.favourite}"></i>
    </a>

    <div class="recipe-block__thumbnail-outer">
      <img
        class="recipe-block__thumbnail"
        :src="recipe.thumbnail"
        :alt="recipe.title"
      />
    </div>
    <div class="recipe-block__title">
      {{ recipe.title }}
    </div>
    <div class="recipe-block__ingredients">
      <span
        class="recipe-block__ingredient tag is-info"
        v-for="(ingredient, index) in ingredients"
        :key="index"
        v-text="ingredient"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecipeBlock',
    props: {
      recipe: {
        type: Object,
        required: true,
      },
      showFavouriteStar: Boolean,
      onFavouriteClick: Function,
    },
    methods: {
      handleFavouriteClick() {
        const { onFavouriteClick, recipe } = this;

        if (onFavouriteClick) {
          onFavouriteClick(recipe);
        }
      },
    },
    computed: {
      ingredients() {
        const { recipe: { ingredients = null } } = this;

        if (!ingredients) {
          return [];
        }

        return ingredients.split(',');
      },
    },
  };
</script>

<style lang="scss">
  .recipe-block {
    border: 1px solid #ededed;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    position: relative;

    &__star {
      color: #ffd83d;
      display: block;
      font-size: 1.5rem;
      line-height: 1.5rem;
      position: absolute;
      top: 8px;
      left: 8px;
    }

    &__thumbnail-outer {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
    }

    &__thumbnail {
      display: block;
      margin-right: 15px;
      width: auto;
    }

    &__title {
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    &__ingredients {
      margin: -2px;
    }

    &__ingredient {
      margin: 2px;
    }

    @media screen and (min-width: 1088px) {
      padding: 16px;

      &__star {
        top: 16px;
        left: 16px;
      }
    }
  }
</style>
