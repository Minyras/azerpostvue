import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import Credit from "@/components/Credit.vue";
const routes = [
  {
    path: "/",
    component: () => LoginView,
    meta: { layout: "login" },
  },
  {
    path: "/home",
    component: () => HomeView,
    meta: { layout: "default", requiresAuth: true },
  },
  {
    path: "/credit",
    component: () => Credit,
    meta: { layout: "default", requiresAuth: true },
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to) => {
  const isAuthenticated = localStorage.getItem("token");

  if (to.meta.requiresAuth && !isAuthenticated) {
    return {
      path: "/",
    };
  }
});

export default router;
