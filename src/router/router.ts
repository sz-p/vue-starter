import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index/index'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/about'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router