const jwt = require('jsonwebtoken')

module.exports = class AuthService {
    static createToken(payload) {
        return jwt.sign(payload, process.env.APP_TOKEN, {
            expiresIn: 432000
        })
    }
    static decodeToken(token) {
        return jwt.verify(token, process.env.APP_TOKEN)
    }
    static verifyToken(token) {
        return jwt.verify(token, process.env.APP_TOKEN, (error, decoded) => !error && decoded)
    }
}