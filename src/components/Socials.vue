<template>
  <div class="d-flex align-center align-content-space-around h-screen w-screen">
    <div class="home">
      <router-link to="/">
        <p class="h-text">HOME</p>
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

<script></script>

<style scoped>
.links-holder {
  width: 90%;
}

.home {
  width: 5%;
}

.extra-links {
  width: 35%;
}

.h-text {
  rotate: 90deg;
}
</style>
