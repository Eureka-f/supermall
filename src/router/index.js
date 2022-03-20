// import  Vue from 'vue'
// import  VueRouter  from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const Home = () =>import('../views/home/Home.vue')
const Category = () =>import('../views/category/Category')
const Cart = () =>import('../views/cart/Cart')
const Profile = () =>import('../views/profile/Profile')
const Detail = () =>import('../views/detail/Detail')
const Recommend = () => import('../views/detail/childComps/DetailRecommend')
// Vue.use('VueRouter')

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/detail/:iid",
    component: Detail
  },
  {
    path: '/recommend',
    component:Recommend
  }
]
const router = createRouter({
  routes,
  "history": createWebHistory()
})

export default router