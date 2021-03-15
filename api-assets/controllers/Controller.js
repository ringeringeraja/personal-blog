module.exports = class Controller {
    model = null
    description = null
    
    constructor(options) {
        Object.assign(this, options)
    }

    describe() {
        return this.description
    }
    get({ body }) {
        return this.model
            .findOne(body)
    }
    getAll({ body }) {
        return this.model
            .find(body)
            .sort({
                updated_at: -1,
                created_at: -1
            })
    }
    save({ body }) {
        const { _id } = body

        return _id
            ? this.model.findOneAndUpdate({ _id }, body, { new: true, runValidators: true })
            : this.model.create(body)
    }
    remove({ body }) {
        return this.model
            .findOneAndDelete(body)
    }
}