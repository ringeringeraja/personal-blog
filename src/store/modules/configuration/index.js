import Module from '../generic'

export default class Configuration extends Module {
    constructor() {
        super({
            namespaced: true,
            route: 'configuration',

            state: {
                postCount: 0
            }
        })
    }
}