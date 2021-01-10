<template>
  <div class="container">
    <div class="card-deck">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5">
        <div class="col mb-4" v-for="movie in favorites" :key="movie.id">
          <div class="card">
            <img
              class="card-img-top"
              :src="require(`../assets/images/${movie.image}.jpg`)"
            />
            <div class="card-body">
              <p>
                <i class="fas fa-square"></i> {{ movie.time }} min ·
                {{ movie.year }}
              </p>
              <a @click="favorite(movie)"
                ><i :class="isFavorite(movie.favorite)"></i
              ></a>
              <h1 class="card-text">{{ movie.name }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    favorites() {
      return this.$store.getters.getFavorites;
    },
  },
  methods: {
    isFavorite(value) {
      if (value) {
        return "fas fa-heart";
      } else {
        return "far fa-heart";
      }
    },
    favorite(value) {
      this.$store.commit("removeFavorite", value.id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/card-style.scss";
</style>