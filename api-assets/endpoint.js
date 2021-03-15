const polyfill = require('../isomorphic/polyfill')
const { isPathPublic } = require('./publicPaths')

const endpoint = (callback) => async (req, res) => {
    try {
        res.setHeader('Access-Control-Allow-Credentials', 'true')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')

        res.setHeader(
            'Access-Control-Allow-Headers',
            'Accept,Accept-Version,Authorization,Content-Length,Content-MD5,Content-Type,Date,X-Api-Version'
        )

        if( req.method === 'OPTIONS' ) {
            res.status(200).end()
            return
        }

        return await callback(req, res, 'auth123')

    } catch( error ) {
        const { message } = error;
        console.trace(error)

        return res.status(500).json({ message, error })
    }
}

const configEndpoint = async (req, res, auth) => {
    try {
        const { query: { action } } = req
        const [ controller, verb ] = action.split('@')

        const Controller = require(`./controllers/${controller.capitalize()}Controller`)
        const instance = new Controller;

        if( !(verb in instance) ) {
            throw new Error('invalid verb')
        }

        const result = await instance[verb](req, res, auth)

        if( /_?get/i.test(verb) && !result ) {
            throw new Error('item not found')
        }

        res.status(200).send({ result, message: 'teste mensagem' })

    } catch( error ) {
        if( error.code == 'MODULE_NOT_FOUND' ) {
            throw new Error('invalid controller')
        }

        throw error;

    }
}

module.exports = {
    endpoint,
    configEndpoint
}