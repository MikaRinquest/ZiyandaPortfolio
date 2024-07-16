<template>
  <div class="w-screen">
    <div class="home">
      <router-link to="/">
        <p class="h-text">HOME</p>
      </router-link>
    </div>
    <div class="artcards">
      <h2 class="text-center">Art Category</h2>
      <div class="card-holder d-flex flex-wrap">
        <v-card
          class="mx-auto mb-5"
          width="400"
          v-for="(card, index) in cards"
          :key="index"
        >
          <v-img color="surface-variant" height="200" :src="card.src" cover>
          </v-img>
          <v-card-actions>
            <v-btn>Click me</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          src: "https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.home {
  height: 5%;
}

.artcards {
  margin-top: 2rem;
}
</style>
