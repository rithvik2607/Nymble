<template>
  <div class="hello">
    <input type="text" v-model="search" placeholder="Enter movie title"/>
    <ul>
      <div v-for="movie in movies" :key="movie.id">
        <div class="titles">
        <route-link :to="{name: 'Details', params: {id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        popularity: movie.popularity,
        overview: movie.overview,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        adult: movie.adult
          } }">
          {{ movie.title }}
        </route-link>
        </div>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';

const GET_MOVIES = gql` query {
  movies(search: $search) {
    id
    title
    genres
  }
}`;


export default Vue.extend({
  name: 'HelloWorld',
  data: function(){
    return {
      movies: [],
      search: ''
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.titles {
  cursor:pointer
}
</style>
