<template>
  <div class="a-holder d-flex justify-center">
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
.a-holder {
  width: 30%;
}

.a-text,
.triangle {
  rotate: 90deg;
}

.triangle {
  margin-right: -1.4rem;
}

.home:hover {
  margin-left: 0.5rem;
}
</style>
