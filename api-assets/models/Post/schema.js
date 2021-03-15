const { mongoose, options } = require('../../database')

const PostStructure = {
    slug: {
        type: String,
        slug: 'title',
        slugPaddingSize: 4,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    categories: [{
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    }]
}

const PostSchema = mongoose.Schema(PostStructure, options)
const Post = mongoose.model('Post', PostSchema)

module.exports = { PostSchema, Post }