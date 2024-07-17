<template>
  <div class="d-flex align-center align-content-space-around h-screen w-screen">
    <div>
      <router-link to="/">
        <div class="home d-flex align-center">
          <svg-icon
            type="mdi"
            :path="path"
            class="triangle color-white"
          ></svg-icon>
          <p class="h-text">HOME</p>
        </div>
      </router-link>
    </div>
    <div class="links-holder d-flex align-center justify-center flex-column">
      <div class="email">
        <h1 class="w-50 text-center">ziyandambula@gmail.com</h1>
      </div>
      <div class="d-flex w-50 justify-space-between">
        <div class="insta extra-links"><h3>instagram</h3></div>
        <div class="linkedin extra-links"><h3>linkedin</h3></div>
        <div class="onlyfans extra-links"><h3>onlyfans</h3></div>
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
    };
  },
};
</script>

<style scoped>
.links-holder {
  width: 90%;
}

.container {
  width: 5%;
}

.extra-links {
  width: 35%;
}

.home:hover {
  padding-left: 0.5rem;
}

.h-text,
.triangle {
  rotate: 90deg;
}

.triangle {
  margin-right: -1rem;
}
</style>
