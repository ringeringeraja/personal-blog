import { createRouter, createWebHistory } from 'vue-router'

const publicRoutes = [
    {
        path: '/',
        component: () => import('views/home'),
        meta: { title: 'Página inicial' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...publicRoutes
    ]
})

export default router