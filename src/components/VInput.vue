<template>
  <input
    v-if="type !== 'textarea'"
    class="input"
    :class="classes"
    :type="type"
    :value="value"
    v-bind="$attrs"
    @input="handleInput"
    @blur="handleBlur"
   />
   <textarea
    class="textarea"
    :class="classes"
    :value="value"
    v-else
    v-bind="$attrs"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>

<script>
  export default {
    name: 'VInput',
    inject: {
      vField: {
        default: {},
      },
    },
    props: {
      value: {},
      name: String,
      type: {
        type: String,
        default: 'text',
      },
      invalid: Boolean,
    },
    methods: {
      handleBlur() {
        this.$emit('blur');
      },
      handleInput(ev) {
        this.$emit('input', ev);
      },
    },
    computed: {
      classes() {
        const { isInvalid } = this;

        return [isInvalid ? 'is-danger' : null];
      },
      isInvalid() {
        return this.invalid || !!this.vField.error;
      },
    },
  };
</script>
