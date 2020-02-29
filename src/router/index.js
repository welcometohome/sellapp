import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index, children: [
      {
        path: '/',
        name: 'goods',
        component: () => import('../views/Goods.vue')
    },
    {
        path:'/evaluate',
        name:'Evaluate',
        component: () => import('../views/Evaluate.vue')
    },
    {
        path:'/business',
        name:'Business',
        component: () => import('../views/Business.vue')
    }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
