import { createApp } from 'vue'
import App from 'components/app'

import router from './router'
import store from './store'

const globalComponents = [
    ['Button',          await import('components/utils/button')],
    ['EntryContainer',  await import('components/containers/entry')],
    ['FormContainer',   await import('components/containers/form')],
    ['FormLabel',       await import('components/containers/form-label')]
]

if( process.env.NODE_ENV === 'development' ) {
    Object.assign(window, {
        router_: router,
        store_: store
    })
}

const mixin = {
    methods: {
        goToPost(post) {
            store.commit('post/ITEM_GET', post)
            router.push({ name: 'post', params: { slug: post.slug } })
        },
    }
}

store.dispatch('configuration/get').then((result) => {
    const app = createApp(App)

    app
        .provide('configuration', result)
        .use(router)
        .use(store)
        .mixin(mixin)

    globalComponents
        .forEach(([name, component]) => app.component(name, component.default))

    app.mount('#root')

})