<template>
  <div class="section h-screen">
    <div class="d-flex justify-space-around align-center h-75">
      <div class="a-holder">
        <div class="about">
          <router-link to="/about">
            <p class="a-text">ABOUT</p>
          </router-link>
        </div>
      </div>
      <div class="h-holder">
        <div class="d-flex align-center justify-center flex-column">
          <h1>Ziyanda Mbula</h1>
          <h3>certified lover girl certified pedophile</h3>
        </div>
      </div>
      <div class="s-holder">
        <div class="socials">
          <router-link to="/socials">
            <p class="s-text">SOCIAL MEDIA</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="d-flex justify-center">
      <div class="hover w-25"><p>Type of artwork</p></div>
      <div class="hover w-25"><p>Type of artwork</p></div>
      <div class="hover w-25"><p>Type of artwork</p></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.a-text {
  rotate: 90deg;
}

.s-text {
  rotate: -90deg;
}

.hover {
  transition: 0.3s ease;
}

.hover:hover {
  transition: 0.2s ease;
  margin-top: -10px;
}
</style>
