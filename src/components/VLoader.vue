<template>
  <div class="v-loader" :class="classes">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: 'VLoader',
    props: {
      size: String,
    },
    computed: {
      classes() {
        const { size } = this;
        return [size ? `v-loader--${size}` : null];
      },
    },
  };
</script>

<style lang="scss">
  .v-loader {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 12px;
  }
  .v-loader div {
    position: absolute;
    top: 0px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #209cee;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .v-loader div:nth-child(1) {
    left: 6px;
    animation: v-loader1 0.6s infinite;
  }
  .v-loader div:nth-child(2) {
    left: 6px;
    animation: v-loader2 0.6s infinite;
  }
  .v-loader div:nth-child(3) {
    left: 26px;
    animation: v-loader2 0.6s infinite;
  }
  .v-loader div:nth-child(4) {
    left: 45px;
    animation: v-loader3 0.6s infinite;
  }
  @keyframes v-loader1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes v-loader3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes v-loader2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
</style>
