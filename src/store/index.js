import { createStore, createLogger } from 'vuex'

import Post from './modules/post'
import User from './modules/user'
import Admin from './modules/admin'
import Configuration from './modules/configuration'

export default createStore({
    modules: {
        post: new Post,
        user: new User,
        admin: new Admin,
        configuration: new Configuration,
    },
    plugins: [
        ...(process.env.NODE_ENV === 'development' ? [createLogger()] : [])
    ]
})