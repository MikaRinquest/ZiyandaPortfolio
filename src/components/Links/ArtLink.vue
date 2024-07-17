<template>
  <div class="d-flex justify-center">
    <router-link to="/artwork">
      <div class="home w-25">
        <p>Type of artwork</p>
        <svg-icon
          type="mdi"
          :path="path"
          class="triangle color-white"
        ></svg-icon>
      </div>
    </router-link>
    <router-link to="/artwork">
      <div class="home w-25">
        <p>Type of artwork</p>
        <svg-icon
          type="mdi"
          :path="path"
          class="triangle color-white"
        ></svg-icon>
      </div>
    </router-link>
    <router-link to="/artwork">
      <div class="home w-25">
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

<style scoped></style>
