module.exports = class Controller {
    model = null
    description = null
    
    constructor(options) {
        Object.assign(this, options)
    }

    describe() {
        return this.description
    }
    count({ body }) {
        return this.model
            .countDocuments(body)
    }
    get({ body }) {
        return this.model
            .findOne(body)
    }
    getAll({ body }) {
        const { start, ...payload } = body || {}
        const offset = +start > 0 ? +start : 0

        return this.model
            .find(payload)
            .limit(10)
            .skip(offset)
            .sort({
                updated_at: -1,
                created_at: -1
            })
    }
    save({ body: { _id, ...body } }) {
        return typeof _id === 'string' && _id.length > 0
            ? this.model.findOneAndUpdate({ _id }, body, { new: true, runValidators: true })
            : this.model.create(body)
    }
    remove({ body }) {
        return this.model
            .findOneAndDelete(body)
    }
}