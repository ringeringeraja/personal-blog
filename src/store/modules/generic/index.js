import actions_ from './actions'
import getters_ from './getters'
import mutations_ from './mutations'

import AxiosWrapper from '@/http'

export default class Module {
    http = null
    route = null
    state_ = {
        offset: 0,
        item: {
            _id: '',
            slug: '',
            created_at: '',
            updated_at: '',
        },
        items: [],
        filtered: [],
    }

    state = {}
    actions = {}
    getters = {}
    mutations = {}

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
                state: {
                    ...this.state_,
                    ...state,

                    item: {
                        ...this.state_.item,
                        ...(state.item || {}),
                    }
                }
            })

            this.initialState = JSON.parse(JSON.stringify(this.state))

            Object.assign(this, {
                actions: actions_(http, this.initialState),
                getters: getters_(this.initialState),
                mutations: mutations_,
            })

        } else {

            if( state ) {

                this.state = {
                    ...this.state,
                    ...(state || {}),

                    item: {
                        ...(this.state.item || {}),
                        ...(( state && state.item ) ? state.item : {})
                    }
                }
            }

            this.initialState = JSON.parse(JSON.stringify(this.state))

        }

        this.appendProperty('actions', actions && actions(http, this.initialState))
        this.appendProperty('getters', getters && getters(this.initialState))
        this.appendProperty('mutations', mutations)
    }

    
}