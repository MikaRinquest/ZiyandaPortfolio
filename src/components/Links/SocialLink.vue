<template>
  <div class="s-holder d-flex justify-center">
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
.s-holder {
  width: 30%;
}

.s-text,
.triangle {
  rotate: -90deg;
}

.triangle {
  margin-left: -1rem;
}

.home:hover {
  margin-left: -0.5rem;
}
</style>
