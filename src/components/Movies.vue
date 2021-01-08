<template>
  <div class="container">
    <div class="card-deck">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5">
        <div class="col mb-4" v-for="movie in movies" :key="movie.id">
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
  computed: {
    movies() {
      return this.$store.getters.getMovies;
    },
  },
};
</script>

<style lang="scss">
@import "../style/style.scss";

.card {
  background-color: $navy-blue;
  color: white;
  border: none;

  & img {
    width: 100%;
    height: 450px;
  }

  & .card-body {
    & .fas {
      color: $red;
      font-size: 0.7rem;
      padding: 10px;
    }
    & h1 {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
}
</style>