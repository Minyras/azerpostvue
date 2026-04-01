import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/LoginView.vue"),
    meta: { layout: "login" },
  },
  {
    path: "/home",
    component: () => import("@/views/HomeView.vue"),
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
