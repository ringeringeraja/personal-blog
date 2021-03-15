import actions_ from './actions'
import getters_ from './getters'
import mutations_ from './mutations'

import AxiosWrapper from '@/http'

export default class Module {
    http = null
    route = null
    state_ = {
        item: {},
        items: [],
        filtered: [],
    }

    appendProperty(name, prop) {
        this[name] = {
            ...(this[name] || {}),
            ...prop
        }
    }

    constructor({ state, actions, getters, mutations, route, defaults, ...options }) {

        const http = new AxiosWrapper({
            baseURL: process.env.APP_API_URL,
            baseRoute: route,
            timeout: 36000
        })

        Object.assign(this, {
            ...options,
            http,
        })

        if( defaults === undefined || defaults === true ) {
            Object.assign(this, {
                state: this.state_,
                actions: actions_(http),
                getters: getters_,
                mutations: mutations_,
            })
        }

        this.appendProperty('state', state)
        this.appendProperty('actions', actions && actions(http))
        this.appendProperty('getters', getters)
        this.appendProperty('mutations', mutations)
    }

    
}