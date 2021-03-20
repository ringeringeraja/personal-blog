const PostController = require('./PostController')

module.exports = class ConfigurationController {
    async get() {
        const post = new PostController

        return {
            postCount: await post.count({})
        }
    }
}