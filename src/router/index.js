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
    meta: { transition: "slide-left" },
  },
  {
    path: "/socials",
    name: "socials",
    component: function () {
      return import("../views/SocialView.vue");
    },
    meta: { transition: "slide-right" },
  },
  {
    path: "/artwork",
    name: "artwork",
    component: function () {
      return import("../views/ArtView.vue");
    },
    meta: { transition: "slide-down" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
