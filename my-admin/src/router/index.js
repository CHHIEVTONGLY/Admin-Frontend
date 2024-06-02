import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomePageView.vue";
import RegisterPage from "../views/RegisterPage.vue";
import DashboardView from "../views/DashboardView.vue";
import LocalnewsComponent from "../components/LocalnewsComponent.vue";
import WorldnewsComponent from "../components/WorldnewsComponent.vue";
import PublishPageView from "@/views/PublishPageView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
    children: [
      {
        path: "register",
        name: "Register",
        component: RegisterPage,
      },
      {
        path: "localnews",
        name: "LocalnewsDashboard",
        component: LocalnewsComponent,
      },
      {
        path: "worldnews",
        name: "WorldnewsDashboard",
        component: WorldnewsComponent,
      },
      {
        path : "publish",
        name: "Publish",
        component: PublishPageView,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("token");
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
