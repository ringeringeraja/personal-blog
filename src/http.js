import axios from 'axios'

export default class AxiosWrapper {
    instance = null
    baseRoute = null

    constructor({ baseRoute, ...options }) {
        this.instance = axios.create(options)
        this.baseRoute = baseRoute

        this.instance.interceptors.request.use((config) => {
            return {
                ...config,
                url: `${baseRoute}@${config.url}`
            }
        })

        Object.assign(this, this.instance)
    }
}