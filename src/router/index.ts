import routes from './routes'

const history = import.meta.env.VITE_ROUTER_MODE === 'hash' ? createWebHashHistory() : createWebHistory()

const router = createRouter({
  history: history,
  routes
})

export default router
