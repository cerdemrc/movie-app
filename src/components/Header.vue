<template>
  <div class="header">
    <ul>
      <li><a href="#">Movies</a></li>
      <li><a href="#">Favorites</a></li>
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
      margin-left: 50px;
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