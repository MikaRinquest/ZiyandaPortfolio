<template>
  <router-view v-slot="{ Component }">
    <!-- Turning whatever route we are in into a component -->

    <transition name="route" mode="out-in">
      <component :is="Component"></component>
      <!-- Using whatever route we are currently in as a component-->
    </transition>
  </router-view>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  color: white;
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  background-color: black;
  color: white;
}

.home {
  height: 5rem;
  aspect-ratio: 1;
  transition: 0.5s ease;
}

.triangle {
  height: 1rem;
  aspect-ratio: 1;
}

/* Route transitions */

/* The below runs the beginning of the animation(entering) */
.route-enter-from {
  /* Where the transition is coming from at the start of the animation */
  opacity: 0; /* When starting the transition from one route to the next, everything will 'vanish' */
  transform: translateX(-1000px); /* The animation will come in from the left */
}

/* The below dictates what happens during the animation, usually just determining how fast the transition will be */
.route-enter-active,
.route-leave-active {
  /* Does not need to have the same speed */
  transition: all 0.3s ease-out;
  /* You do not need to specify opacity:1; because the animation automatically goes to opacity:1; */
}

/* The below runs the end of the animation(exiting) */
.route-leave-to {
  opacity: 0;
  transform: translateX(1000px); /* The animation will go to the right */
}
</style>
