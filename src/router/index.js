import { createRouter, createWebHistory } from "vue-router";
import ContactPage from "../components/ContactPage.vue";
import Home from "../components/Home.vue";
import Livraison from "../components/Livraison.vue";
import Dishes from "../components/Menu/Dishes.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/livraison",
    name: "livraison",
    component: Livraison,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "/menu",
    name: "menu",
    component: Dishes,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
