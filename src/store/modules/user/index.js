import Module from '../generic'

export default class User extends Module {
    constructor() {
        super({
            namespaced: true,
            defaults: false,
            route: 'user',
        })

        this.appendProperty('state', {
            isAuthenticated: false,
            isAdmin: false,
            pair: {
                username: '',
                password: ''
            },
            currentUser: {
                token: '',
            }
        })

        this.appendProperty('actions', {
            signin: ({ commit }, payload) => {
                this.http.post('signin', payload)
                    .then(({ data }) => {
                        const { result } = data
                        commit('USER_AUTH', result)

                    })
                    .catch(error => error)
                    .finally(() => {})

            }
        })

        this.appendProperty('mutations', {
            USER_AUTH(state, payload) {
                state.currentUser = payload
            }
        })

        this.appendProperty('getters', {
            isAuthenticated: state => state.isAuthenticated,
            isAdmin: state => state.isAdmin,
            pair: state => state.pair,
            currentUser: state => state.currentUser
        })
    }
}