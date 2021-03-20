const { Post } = require('../models/Post')
const Controller = require('./Controller')

module.exports = class PostController extends Controller {
    constructor() {
        super({
            model: Post,
            description: 'Publicação'
        })
    }
}