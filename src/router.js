import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/postulant/Index.vue")
    },
    {
      path: "/clients/create",
      name: "create-client",
      component: () => import("./views/client/Create.vue")
    },
    {
      path: "/booking/create",
      name: "create-booking",
      component: () => import("./views/booking/Create.vue")
    },
  ]
});
