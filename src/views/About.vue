<template>
  <div class="container">
    <HomeButton />
    <b-img-lazy src="@/assets/marvel-hero-image.png" center fluid alt="Hero Banner"></b-img-lazy>
    <h5
      align="center"
    >A simple application that shows a list of Marvel characters and displays information about them.</h5>
  </div>
</template>

<script>
import HomeButton from "@/components/ReturnHomeButton.vue";
export default {
  components: {
    HomeButton
  },
  name: 'About',
  metaInfo: {
    title: 'About Us',
    titleTemplate: null,
  }
};
</script>
