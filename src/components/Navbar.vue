<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <div class="container">
      <b-navbar-brand exact to="/">Marvel Directory</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item exact to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link {
  color: white !important;
  transition: 0.3s ease all;
  border-radius: 3px;
  -webkit-transition: background-color ease-out 0.3s;
  -moz-transition: background-color ease-out 0.3s;
  -o-transition: background-color ease-out 0.3s;
  transition: background-color ease-out 0.3s;
}

.navbar-dark .navbar-nav .nav-link:hover {
  background-color: black !important;
}
</style>