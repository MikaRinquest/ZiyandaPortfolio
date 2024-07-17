<template>
  <div class="w-screen d-flex flex-column align-center">
    <router-link to="/">
      <div class="home">
        <svg-icon
          type="mdi"
          :path="path"
          class="triangle color-white"
        ></svg-icon>
        <p class="h-text">HOME</p>
      </div>
    </router-link>
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
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiTriangleDown } from "@mdi/js";
// import { mdiTriangleDownOutline } from "@mdi/js";
export default {
  name: "my-cool-component",

  components: {
    SvgIcon,
  },
  data() {
    return {
      path: mdiTriangleDown,
      // path: mdiTriangleDownOutline,
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
.home:hover {
  padding-top: 0.5rem;
}

.triangle {
  rotate: 180deg;
  margin-bottom: -0.5rem;
}

.artcards {
  margin-top: 2rem;
}
</style>
