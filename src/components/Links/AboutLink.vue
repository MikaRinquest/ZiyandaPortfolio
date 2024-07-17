<template>
  <div class="a-holder">
    <div class="about">
      <router-link to="/about">
        <div class="home d-flex align-center">
          <svg-icon
            type="mdi"
            :path="path"
            class="triangle color-white"
          ></svg-icon>
          <p class="a-text">ABOUT</p>
        </div>
      </router-link>
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
.a-text,
.triangle {
  rotate: 90deg;
}
</style>
