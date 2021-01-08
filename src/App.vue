<template>
  <div id="app">
    <Header />
    <Search />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import Search from "./components/Search";
export default {
  components: {
    Header,
    Search,
  },
};
</script>

<style lang="scss">
@import "./style/style.scss";
#app {
  font-family: $poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

body {
  background-color: $navy-blue;
}
</style>
