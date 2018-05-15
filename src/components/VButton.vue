<template>
  <button
    class="button"
    v-bind="$attrs"
    v-on="$listeners"
    :class="classes"
  >
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script>
  export default {
    name: 'VButton',
    props: {
      text: String,
      color: String,
      loading: Boolean,
      outlined: Boolean,
      disabled: Boolean,
    },
    computed: {
      classes() {
        const {
          color, outlined, loading, disabled,
        } = this;
        return [
          color,
          outlined ? 'is-outlined' : null,
          loading ? 'is-loading' : null,
          disabled ? 'is-disabled' : null,
        ];
      },
    },
  };
</script>
