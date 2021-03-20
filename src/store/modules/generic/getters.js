export default (initialState) => ({
    offset(state) {
        return +state.offset >= 0
            ? +state.offset
            : 0
    },
    item(state) {
        return state.item
    },
    items(state) {
        return state.items
    },
    filtered(state) {
        return state.filtered
    },
    hasItem(state) {
        return JSON.stringify(state) !== JSON.stringify(initialState)
    },
    hasItems(state) {
        return state.items.length > 0
    },
    count(state) {
        return state.items.length
    }
})