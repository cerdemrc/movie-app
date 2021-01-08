<template>
  <div id="app">
    <Header />
    <Search />
    <Movies />
  </div>
</template>

<script>
import Header from "./components/Header";
import Search from "./components/Search";
import Movies from "./components/Movies";
export default {
  components: {
    Header,
    Search,
    Movies,
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
