<template>
  <div class="details">
    <h1>{{ title }}</h1>
    <h3>{{ release_date }}</h3>
    <h4>{{ popularity }}</h4>
    <p>{{ overview }}</p>
    <div>
        <label>Vote Average: <p>{{ vote_average }}</p></label>
        <label>Vote Count: <p>{{ vote_count }}</p></label>
        <label>Adult: <p>{{ adult }}</p>></label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Details',
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
</style>
