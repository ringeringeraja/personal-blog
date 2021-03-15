import { createApp } from 'vue'
import App from 'components/app'

import router from './router'
import store from './store'

import Button from 'components/utils/button'
import FormContainer from 'components/containers/form'
import FormLabelContainer from 'components/containers/form-label'

if( process.env.NODE_ENV === 'development' ) {
    Object.assign(window, {
        router_: router,
        store_: store
    })
}

createApp(App)
    .use(router)
    .use(store)
    .component('Button', Button)
    .component('FormContainer', FormContainer)
    .component('FormLabel', FormLabelContainer)
    .mount('#root')