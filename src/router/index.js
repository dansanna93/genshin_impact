import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Characters from '@/views/Characters.vue'
import Search from '@/views/Search.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { title: 'Genshin Impact | Homepage' }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { title: 'Genshin Impact | About' }
    },
    {
        path: '/characters',
        name: 'Characters',
        component: Characters,
        meta: { title: 'Genshin Impact | Characters' }
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        meta: { title: 'Genshin Impact | Search' }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? 'Default Title'
  })

export default router