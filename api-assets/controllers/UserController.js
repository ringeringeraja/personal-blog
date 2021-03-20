// const { User } = require('../models/User')
const AuthService = require('../services/auth')

module.exports = class UserController {
    // constructor() {
    //     super({
    //         // model: User,
    //         description: 'Usuário'
    //     })
    // }

    exists(payload) {
        const { user } = payload
        return false
    }
    signin({ body }) {
        const { username, password } = body

        if (
            username === process.env.APP_USERNAME &&
            password === process.env.APP_PASSWORD
        ) {
            return {
                token: AuthService.createToken({ username })
            }
        }
    }
}