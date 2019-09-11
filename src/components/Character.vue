<template>
  <div class="container">
    <HomeButton />
    <div v-if="loading === true">
      <Loading />
    </div>
    <div v-else-if="error === true">
      <ErrorMessage />
    </div>
    <b-row>
      <b-col>
        <div v-for="info in character" :key="info.id">
          <b-img-lazy class="my-2" :src="url" fluid center alt="Profile Picture"></b-img-lazy>
          <h3 align="center">{{ info.name }}</h3>
          <p v-if="info.description === ''" align="center">No Description Available</p>
          <p v-else align="center">{{ info.description }}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { public_key } from "../marvel";
import HomeButton from "@/components/ReturnHomeButton.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import Loading from "@/components/Loading.vue";
import axios from "axios";
export default {
  name: "Character",
  components: {
    HomeButton,
    ErrorMessage,
    Loading
  },

  data() {
    return {
      loading: true,
      error: null,
      character: [],
      url: "",
      size: "portrait_uncanny"
    };
  },

  mounted() {
    this.getCharacter();
  },

  methods: {
    getCharacter() {
      let characterId = this.$route.params.id;

      axios
        .get(
          `https://gateway.marvel.com/v1/public/characters/${characterId}?apikey=${public_key}`
        )
        .then(result => {
          result.data.data.results.forEach(item => {
            this.loading = true;
            this.character.push(item);
            this.url = `${item.thumbnail.path}/${this.size}.${item.thumbnail.extension}`;
          });
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          this.error = true;
          console.log(error);
        });
    }
  }
};
</script>