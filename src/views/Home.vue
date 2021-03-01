<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="$router.push('/about')">
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
    this.$store.commit('setLoadingStatus', false);
  }
}
</script>
