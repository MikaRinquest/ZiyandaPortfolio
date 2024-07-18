<template>
  <div class="d-flex justify-space-evenly">
    <router-link to="/artwork">
      <div class="homelink">
        <p>Type of artwork</p>
        <svg-icon
          type="mdi"
          :path="path"
          class="triangle color-white"
        ></svg-icon>
      </div>
    </router-link>
    <router-link to="/artwork">
      <div class="homelink">
        <p>Type of artwork</p>
        <svg-icon
          type="mdi"
          :path="path"
          class="triangle color-white"
        ></svg-icon>
      </div>
    </router-link>
    <router-link to="/artwork">
      <div class="homelink">
        <p>Type of artwork</p>
        <svg-icon
          type="mdi"
          :path="path"
          class="triangle color-white"
        ></svg-icon>
      </div>
    </router-link>
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
.homelink {
  aspect-ratio: 1;
  transition: 0.5s ease;
}

.homelink:hover {
  margin-top: -0.5rem;
}
</style>
