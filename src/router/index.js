import { createRouter, createWebHistory } from 'vue-router'

const publicRoutes = [
    {
        name: 'home',
        path: '/',
        alias: '/page/:page?',
        component: () => import('views/home'),
        meta: { title: 'Página inicial' }
    },
    {
        name: 'config',
        path: '/config',
        component: () => import('views/privileged/config'),
        meta: { title: 'Configurações' }
    },
    {
        name: 'post',
        path: '/post/:slug',
        component: () => import('views/post'),
        meta: { title: 'Publicação' }
    },
    {
        name: 'post-edit',
        path: '/post/:slug/edit',
        component: () => import('views/privileged/post-edit'),
        meta: { title: 'Editar publicação' }
    },
    {
        name: 'post-new',
        path: '/new-post',
        component: () => import('views/privileged/post-edit'),
        meta: { title: 'Nova publicação' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...publicRoutes
    ]
})

router.beforeEach((to, from, next) => {
    const { title } = to.meta || {}
    if( title ) {
        document.title = title
    }

    window.scrollTo(0, 0)

    next()
})

export default router