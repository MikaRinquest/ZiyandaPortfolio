import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: function () {
      return import("../views/AboutView.vue");
    },
  },
  {
    path: "/socials",
    name: "socials",
    component: function () {
      return import("../views/SocialView.vue");
    },
  },
  {
    path: "/artwork",
    name: "artwork",
    component: function () {
      return import("../views/ArtView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
