<template>
  <div class="container">
    <h1 class="mt-2" align="center">Marvel Characters</h1>
    <div v-if="loading === true">
      <Loading />
    </div>
    <div v-else-if="error === true">
      <ErrorMessage />
    </div>
    <div v-else>
      <b-row>
        <b-col
          sm="12"
          md="6"
          lg="4"
          xs="12"
          v-for="(character, index) in characters"
          :key="character.id"
        >
          <b-card-group deck>
            <b-card
              border-variant="dark"
              class="my-3"
              :title="character.name"
              :img-src="images[index]"
              alt="Profile Image"
              img-top
            >
              <b-button
                block
                variant="primary"
                :to="{ name: 'character', params: { id: character.id }}"
              >View Profile</b-button>
              <b-button
                block
                variant="primary"
                :href="character.urls[1].url"
                target="_blank"
                rel="noopener noreferrer"
              >More Info</b-button>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { public_key } from "../marvel";
import ErrorMessage from "@/components/ErrorMessage.vue";
import Loading from "@/components/Loading.vue";
import axios from "axios";
export default {
  name: "Characters",

  data() {
    return {
      loading: true,
      error: null,
      characters: [],
      images: [],
      size: "standard_fantastic",
      url: ""
    };
  },
  components: {
    ErrorMessage,
    Loading
  },

  mounted() {
    this.getCharacters();
  },

  methods: {
    getCharacters() {
      axios
        .get(
          `https://gateway.marvel.com/v1/public/characters?apikey=${public_key}`
        )
        .then(result => {
          result.data.data.results.forEach(item => {
            this.loading = true;
            this.characters.push(item);
            this.url = `${item.thumbnail.path}/${this.size}.${item.thumbnail.extension}`;
            this.images.push(this.url);
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


