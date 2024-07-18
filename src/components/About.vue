<template>
  <div class="d-flex align-center align-content-space-around h-screen w-screen">
    <div class="text ml-5 text-left">
      <h2>
        Why I (Ziyanda Mbula) should be on the registered sex offenders list
      </h2>
      <p>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia,molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat
        iusto fuga praesentiumoptio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquamnihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit,quia.
      </p>
    </div>
    <div class="image">
      <img
        src="https://i.postimg.cc/tJKwc9yH/zee-slay.jpg"
        alt="Image of Ziyanda Slaying"
        class="slay"
      />
    </div>
    <router-link to="/">
      <div class="home d-flex align-center">
        <p class="h-text">HOME</p>
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
.text,
.image {
  width: 45%;
}

.slay {
  width: 55%;
  aspect-ratio: 1;
  border-radius: 15%;
}

.h-text,
.triangle {
  rotate: -90deg;
}

.home:hover {
  margin-left: -0.5rem;
}

.triangle {
  margin-left: -1rem;
}
</style>
