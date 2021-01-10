<template>
  <div class="search">
    <input @keyup="Search" type="text" v-model="search" placeholder="Search" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods:{
    Search(){
      this.$store.commit("search", this.search);
      this.$emit("search", true);
    },
  }
};
</script>

<style lang="scss">
@import "../style/style.scss";
.search {
  & input {
    border-radius: 20%;
    width: 30%;
    outline: none;
    background: none;
    border: 1px solid $lilac;
    border-radius: 20px;
    color: $red;
    padding-left: 10px;
    margin-top: 20px;
  }
  ::placeholder {
    color: $lilac;
  }
}
</style>