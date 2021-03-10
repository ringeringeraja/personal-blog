module.exports = {
    ...require('./shared')('development'),
    devServer: {
        hot: true,
        compress: true,
        disableHostCheck: true,
        publicPath: '/',
        historyApiFallback: {
            index: '/'
        }
    }
}