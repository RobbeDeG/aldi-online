import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'bootstrap';
import {auth} from './firebase';

window.$ = window.jQuery = jQuery;

import 'jquery';
import 'popper.js';
import './assets/app.scss';


Vue.component('Navbar', require('./components/Navbar.vue').default);
Vue.component('Hero', require('./components/Hero.vue').default);

Vue.config.productionTip = false;

let app =''

auth.onAuthStateChanged(function(user) {
if(!app){
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
}
})


