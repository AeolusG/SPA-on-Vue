import Vue from "vue";
import VueRouter from "vue-router";
import usersList from "../components/usersList.vue";
import user from "../components/user.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/SPA-on-Vue/",
    name: "table",
    component: usersList,
  },
  {
    path: "/:id",
    name: "user",
    component: user,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
