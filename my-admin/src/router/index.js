import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomePageView.vue";
import RegisterPage from "../views/RegisterPage.vue";
import DashboardView from "../views/DashboardView.vue";
import LocalnewsComponent from "../components/LocalnewsComponent.vue";
import WorldnewsComponent from "../components/WorldnewsComponent.vue";

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
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
