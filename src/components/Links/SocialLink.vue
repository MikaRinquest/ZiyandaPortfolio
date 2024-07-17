<template>
  <div class="s-holder">
    <div class="socials">
      <router-link to="/socials">
        <div class="home d-flex align-center">
          <p class="s-text">SOCIAL MEDIA</p>
          <svg-icon
            type="mdi"
            :path="path"
            class="triangle color-white"
          ></svg-icon>
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
.s-text,
.triangle {
  rotate: -90deg;
}
</style>
