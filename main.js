import { createApp } from 'vue'
import './main.css'
import App from './App.vue'
import { routes } from '/routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { hot } from 'vite/hmr'

let app = createApp(App)
let router = createRouter({
  history: createWebHistory(),
  routes: __DEV__ ? [] : routes,
})

if (__DEV__) {
  let removeRoutes = []

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route))
  }

  hot.accept('./routes.js', ({ routes }) => {
    for (let removeRoute of removeRoutes) removeRoute()
    removeRoutes = []
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route))
    }
    router.replace('')
  })
}

app.use(router)

app.mount('#app')
