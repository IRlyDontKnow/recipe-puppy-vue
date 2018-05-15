<template>
  <div class="v-page">
    <h1 class="v-page__title" v-if="title">
      {{ title }}
    </h1>

    <div class="v-page__loading" v-if="loading">
      <v-loader
        class="v-page__loader"
      />
      <span class="v-page__loading-text" v-if="loadingText">
        {{ loadingText }}
      </span>
    </div>

    <transition name="fade" mode="in-out">
      <div class="v-page__body" v-if="!loading">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'VPage',
    props: {
      title: String,
      loading: Boolean,
      loadingText: {
        type: String,
        default: 'Loading...',
      },
    },
  };
</script>

<style lang="scss">
  .v-page {
    &__title {
      padding: 0 10px;
      color: #209cee;
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0 0 15px 0;
    }

    &__loading {
      padding-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &__loading-text {
      padding-top: 8px;
      font-size: 0.9rem;
    }

    &__body {
      padding: 0 10px;
    }

    @media screen and (min-width: 1088px) {
      &__title {
        padding: 0;
      }

      &__body {
        padding: 0;
      }
    }
  }
</style>
