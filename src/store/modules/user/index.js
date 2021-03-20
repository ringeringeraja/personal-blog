import Module from '../generic'

export default class User extends Module {
    constructor() {
        super({
            namespaced: true,
            defaults: false,
            route: 'user',

            state: {
                isAuthenticated: false,
                isAdmin: false,
                pair: {
                    username: '',
                    password: ''
                },
                currentUser: {
                    token: ''
                }
            }
        })

        this.appendProperty('actions', {
            signin: ({ commit }, payload) => new Promise((resolve, reject) => this.http.post('signin', payload)
                    .then(({ data }) => {
                        const { result } = data
                        commit('USER_SIGNIN', result)

                        resolve(result)

                    })
                    .catch(error => error)
                    .finally(() => {})

            ),
            signout: ({ commit }) => {
                commit('USER_SIGNOUT')
            }
        })

        this.appendProperty('mutations', {
            USER_SIGNIN: (state, payload) => {
                state.isAuthenticated = true
                state.isAdmin = true
                state.currentUser = payload
                state.pair = this.initialState.pair

                sessionStorage.setItem('auth:token', payload.token)
            },
            USER_SIGNOUT: (state) => {
                state.isAuthenticated = false
                state.isAdmin = false
                state.currentUser = {}

                sessionStorage.removeItem('auth:token')
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