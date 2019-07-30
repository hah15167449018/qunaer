import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/hello',
      component: () => import('../components/HelloWorld')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})
