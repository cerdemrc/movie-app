<template>
  <div class="header">
    <ul>
      <router-link to="/movies" tag="li"><a>Movies</a></router-link>
      <router-link to="/favorites" tag="li"><a>Favorites</a></router-link>
    </ul>
    <div class="line"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../style/style.scss";
.header {
  & ul {
    display: flex;
    flex-flow: row;
    margin: auto;
    justify-content: center;
    align-items: center;
    list-style: none;

    & li {
      margin-left: 10px;
      margin-right: 50px;
      font-size: 1.2rem;
      & a {
        text-decoration: none;
        color: $white;

        &:hover {
          color: $red;
        }
      }
    }
  }
}
.line {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-top: 1px solid $white;
  width: 60%;
  margin-top: 10px;
}
</style>