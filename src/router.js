import Vue from 'vue'
import Router from 'vue-router'
import EngineerCalculator from "@/components/EngineerCalculator";
import Menu from "@/components/Menu";
import MyCalculator from "@/components/MyCalculator";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Menu
    },
    {
      path: '/engine',
      component: EngineerCalculator,
    },
    {
      path: '/simple',
      component: MyCalculator
    },
  ]
})