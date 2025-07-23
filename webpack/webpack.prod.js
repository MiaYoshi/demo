const common = require('./webpack.config.js')
const { merge } = require('webpack-merge')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
const config = {
  mode: 'production',
  plugins: [
    new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$/,
      deleteOriginalAssets: false,
    }),
  ],
}

module.exports = merge(common, config)
