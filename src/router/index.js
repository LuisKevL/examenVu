import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../components/Libros.vue"),
  },

];

const router = new VueRouter({
  mode: "history", 
  fallback: "true", 
  routes,
});
export default router;
