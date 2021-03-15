import { createStore, createLogger } from 'vuex'

import Post from './modules/post'
import User from './modules/user'

export default createStore({
    modules: {
        post: new Post,
        user: new User
    },
    plugins: [
        ...(process.env.NODE_ENV === 'development' ? [createLogger()] : [])
    ]
})