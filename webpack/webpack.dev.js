const common = require('./webpack.config.js')
const { merge } = require('webpack-merge')

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    port: 3333,
    hot: true,
  },
}

module.exports = merge(common, config)
