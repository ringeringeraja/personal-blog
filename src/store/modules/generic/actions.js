export default (http, initialState = {}) => ({

    get: ({ commit }, payload) => new Promise((resolve, reject) => http.post('get', payload)
        .then(({ data }) => {
            const { result } = data

            commit('ITEM_GET', result)
            resolve(result)

        }, (error) => error)
        .finally(() => {})
    ),

    getAll: ({ commit }, payload={}) => new Promise((resolve, reject) => http.post('getAll', payload)
        .then(({ data }) => {
            const { result } = data
            const start = +payload.start || 0

            commit('ITEMS_GET', result)
            commit('OFFSET_CHANGE', start)

            resolve(result)

        }, (error) => error)
        .finally(() => {})
    ),

    save: ({ commit }, payload) => new Promise((resolve, reject) => http.post('save', payload)
        .then(({ data }) => {
            const { result } = data

            commit('ITEM_SAVE', result)
            resolve(result)

        }, (error) => error)
        .finally(() => {})
    ),
    
    remove: ({ commit }, payload) => new Promise((resolve, reject) => http.post('remove', payload)
        .then(({ data }) => {
            const { result } = data

            commit('ITEM_REMOVE', result)
            resolve(result)

        }, (error) => error)
        .finally(() => {})
    ),

    clear: ({ commit }) => new Promise((resolve) => {
        commit('ITEM_CLEAR', initialState)
        resolve(initialState)
    })
})