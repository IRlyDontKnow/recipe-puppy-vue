<template>
  <div class="field v-field">
    <slot name="label">
      <label class="label" v-if="label">
        {{ label }}
        <small class="v-field__help" v-if="help">({{ help }})</small>
      </label>
    </slot>
    <slot name="control">
      <div class="control">
        <slot />
      </div>
    </slot>
    <p class="help is-danger" v-if="error">
      {{ error }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'VField',
    provide() {
      return {
        vField: this,
      };
    },
    props: {
      label: String,
      help: String,
      error: String,
    },
  };
</script>

<style lang="scss">
  .v-field {
    &__help {
      font-weight: 300;
    }
  }
</style>
