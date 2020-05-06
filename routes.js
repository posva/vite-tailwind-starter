import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import { hot } from '@hmr'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/about', component: About, meta: { title: 'About' } },
  { path: '/:path(.*)', component: NotFound },
]

hot.accept(['./view/Home.vue', './views/About.vue'], ([newHome, newAbout]) => {
  console.log(newHome)
  routes[0].component = newHome
  routes[1].component = newAbout
})
