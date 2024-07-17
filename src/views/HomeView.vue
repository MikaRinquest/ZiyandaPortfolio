<template>
  <div class="h-screen">
    <div class="d-flex justify-space-around align-center h-75">
      <AboutLink />
      <Home />
      <SocialLink />
    </div>
    <ArtLink />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import AboutLink from "@/components/Links/AboutLink.vue";
import SocialLink from "@/components/Links/SocialLink.vue";
import ArtLink from "@/components/Links/ArtLink.vue";

export default {
  components: {
    Home,
    AboutLink,
    SocialLink,
    ArtLink,
  },
};
</script>
