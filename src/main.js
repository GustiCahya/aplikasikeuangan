import Vue from 'vue'
import App from './App.vue'

// Font-awesome
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

// Bootstrap and JQuery
import JQuery from 'jquery'
global.JQuery = JQuery
global.$ = JQuery
let bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.min.css'

// Vue-Router
import VueRouter from 'vue-router'
import Routes from './routes'
Vue.use(VueRouter);

// Vue-Tables-2
import {ClientTable, Event} from 'vue-tables-2';
Vue.use(Event);
Vue.use(ClientTable, {}, false, 'bootstrap4');

// axios
import axios from 'axios';
import qs from 'qs';

// Register routes
const router = new VueRouter({
  routes:Routes,
  mode: 'history'
});

const openRoutes = ['login'];

router.beforeEach((to, from, next) => {
  if(openRoutes.includes(to.name)){
    next();
  }else if(localStorage.getItem('token') == "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZFVzZXIiOiI2IiwiaWF0IjoxNTc4MjA4ODQxLCJleHAiOjE1ODA4MDA4NDF9.B9hjoPS0tiOnpBBj67KIdwNOh7rQRGtvEEfLNGYeZ9A"){
    next();
  }else{
    next('/login');
  }
});

// App
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
