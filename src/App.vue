<template>
  <div id="app">
    <Navbar />
    <div id="main-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'App',
  metaInfo: {
    title: 'Marvel Directory',
    titleTemplate: '%s | Marvel Directory'
  },
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
html,
body {
  height: 100%;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main-content {
  flex: 1;
}
</style>

