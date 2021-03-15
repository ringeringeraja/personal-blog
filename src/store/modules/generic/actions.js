export default (http) => ({
    get() {
        return http.post('describe')
        .then(({ data }) => {
            console.log(data)
        })
        .catch(error => error)
        .finally(() => {})
    },
    getAll({ commit }) {
        return http.post('getAll')
        .then(({ data }) => {
            const { result } = data

            console.log(result)
            commit('ITEMS_GET', result)
        })
        .catch(error => error)
        .finally(() => {})
    },
    save({ commit }, payload) {
        return http.post('save', payload)
        .then(({ data }) => {
            //
        })
        .catch(error => error)
        .finally(() => {})
    },
    remove() {
        return http.post('remove')
        .then(({ data }) => {
            //
        })
        .catch(error => error)
        .finally(() => {})
    }
})