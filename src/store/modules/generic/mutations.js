export default {
    ITEM_GET(state, payload) {
        state.item = payload
    },
    ITEMS_GET(state, payload) {
        state.items = payload
    }
}