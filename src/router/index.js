import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import AdminProducts from "../views/AdminProducts.vue";
import Orders from "../views/Orders.vue";
import About from "../views/About.vue";
import Checkout from "../views/Checkout.vue";

import {fb, auth} from "../firebase";

Vue.use(VueRouter);

const router =  new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
      path: "/products",
      name: "products",
      component: Products
    },
    {
      path: "/checkout",
      name: "checkout",
      component: Checkout
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      meta: { requiresAuth: true },
      children:[
        {
          path: "overview",
          name: "overview",
          component: Overview
        },
        {
          path: "products",
          name: "products",
          component: AdminProducts
        },
        {
          path: "orders",
          name: "orders",
          component: Orders
        }
      ]
    },
  ]});
  
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//   const currentUser = fb.auth().currentUser

//   if (requiresAuth && !currentUser) {
//       next('/')
//   } else if (requiresAuth && currentUser) { 
//       next()
//   }
// })

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = auth.currentUser

  if(requiresAuth && !currentUser){
    next('/')
  }else if(requiresAuth && currentUser){
    next()
  }else{
    next()
  }
  })

export default router;
