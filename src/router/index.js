import { createRouter, createWebHistory } from 'vue-router'
import ThePizzaComponent from '@/components/PizzaListComponent/ThePizzaListComponent'
import Cart from '@/components/CartComponent/TheCartComponent'
import NotFound from '@/components/NotFound'

const routes = [
  { path: '/', component: ThePizzaComponent },
  { path: '/cart', component: Cart },
  { path: '/:notFound(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
