import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../views/MainLayout.vue";

const routes = [
  {
    path: "/",
    name: "mainLayout",
    component: MainLayout
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
