export default {
    OFFSET_CHANGE(state, offset) {
        state.offset = offset
    },
    ITEM_GET(state, payload) {
        state.item = payload
    },
    ITEMS_GET(state, payload) {
        state.items = payload
    },
    ITEM_SAVE(state, payload) {
        state.item = payload

        const itemIndex = state.items
            .findIndex(({ _id }) => _id === payload._id)

        if( itemIndex !== -1 ) {
            state.items[itemIndex] = payload
        } else {
            state.items = [
                payload,
                ...state.items
            ]
        }
    },
    ITEM_REMOVE(state, payload) {
        const itemIndex = state.items
            .findIndex(({ _id }) => _id === payload._id)

        state.items.splice(itemIndex, 1)
    },
    ITEM_CLEAR(state, initialState) {
        state.item = initialState.item
    }
}