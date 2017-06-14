<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$Progress.start();
    setTimeout(() => {
      this.$Progress.finish();
    }, 3000);
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
