<template>
  <div id="back-button" class="mt-3 mb-3">
    <router-link exact to="/">
      <fa-icon icon="long-arrow-alt-left" size="lg" />
      <span class="ml-2">Return Home</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeButton"
};
</script>

<style>
#back-button a {
  color: black;
  border-radius: 3px;
  -webkit-transition: background-color ease-out 0.3s;
  -moz-transition: background-color ease-out 0.3s;
  -o-transition: background-color ease-out 0.3s;
  transition: background-color ease-out 0.3s;
}

#back-button a:hover {
  background-color: lime;
}
</style>