<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./style/app.scss";
#app {
  font-family: var(--poppins);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 40px;
}
</style>
