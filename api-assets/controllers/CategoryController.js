const { Category } = require('../models/Category')
const Controller = require('./Controller')

module.exports = class CategoryController extends Controller {
    constructor() {
        super({
            model: Category,
            description: 'Categoria'
        })
    }
}