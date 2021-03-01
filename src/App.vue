<template>
  <div id="app">
    <transition name="page" mode="out-in">
      <router-view class="container" v-if="status" />
    </transition>
    <loading v-show="getLoadingStatus" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        status: false
      }
    },
    computed: {
      getLoadingStatus() {
        return this.$store.state.loadingStatus;
      },
    },
    created() {
      this.$store.commit('setPhone');
      this.status = true;
    }
  }
</script>

<style lang="scss">
  .container {
    display: flex;
    min-height: 100vh;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    .page {
      flex: 1;
      width: 100%;
      box-sizing: border-box;
      background-color: #ececec;
    }
  }
  .page-enter {
    opacity: 0;
  }
  .page-leave {
    opacity: 1;
  }
  .page-enter-active {
    transition: opacity .3s;
  }
  .page-leave-active {
    opacity: 0;
    transition: opacity .3s;
  }
  #app {
    color: #333;
    margin: 0 auto;
    font-size: 12px;
    font-weight: 400;
    max-width: 540px;
    background-color: #fff;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
  }
  // textarea,
  // input {
  //   @include set_input_placeholder;
  //   font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
  // }
  html, body, div, p, ul, ol, li, a, span, i, img, video, input, textarea {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    text-decoration: none;
    -webkit-tap-highlight-color: transparent;
  }
</style>
