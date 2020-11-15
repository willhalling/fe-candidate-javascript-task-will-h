import Vue from 'vue'
import VueRouter from 'vue-router'
import CustomerList from '../views/customer/CustomerList.vue'
import CustomerView from '../views/customer/CustomerView.vue'
import QuoteList from '../views/quote/QuoteList.vue'
import QuoteView from '../views/quote/QuoteView.vue'
import PolicyList from '../views/policy/PolicyList.vue'
import PolicyView from '../views/policy/PolicyView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/customers',
    name: 'Customers',
    component: CustomerList
  },
  {
    path: '/customer/:id',
    name: 'CustomerView',
    component: CustomerView
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: QuoteList
  },
  {
    path: '/quote/:id',
    name: 'QuoteView',
    component: QuoteView
  },
  {
    path: '/policies',
    name: 'Policies',
    component: PolicyList
  },
  {
    path: '/policy/:id',
    name: 'PolicyView',
    component: PolicyView
  },
  {
    path: '/',
    redirect: {
      name: 'Customers'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
