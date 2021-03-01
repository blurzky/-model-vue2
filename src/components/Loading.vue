<template>
  <transition name="loading" appear>
    <div class="loading">
      <div class="balls">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
  .loading-enter, .loading-leave-active {
    opacity: 0;
  }
  .loading {
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    transition: opacity .3s;
    background-color: #ececec;
    .balls {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .balls div {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #1ba0f8;
      transform: translateY(-100%);
      animation: wave 0.8s ease-in-out alternate infinite;
    }
    .balls div:nth-of-type(1) {
      animation-delay: -0.4s;
    }
    .balls div:nth-of-type(2) {
      animation-delay: -0.2s;
    }
    @keyframes wave {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(100%);
      }
    }
  }
</style>
