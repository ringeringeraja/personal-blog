import Module from '../generic'

export default class Post extends Module {
    constructor() {
        super({
            namespaced: true,
            route: 'post',
        })

        this.appendProperty('state', {
            item: {
                title: '',
                content: ''
            }
        })
    }
}