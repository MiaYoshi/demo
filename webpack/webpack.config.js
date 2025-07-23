const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.[fullhash].js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      // js,ts,jsx,tsx
      {
        test: /\.(js|ts|jsx|tsx)$/i,
        include: path.resolve(__dirname, './src'),
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              target: 'es6',
            },
          },
        ],
      },
      // 图片
      {
        test: /\.(png|jpg|gif|svg|webp)$/i,
        include: path.resolve(__dirname, './src'),
        type: 'asset/resource',
      },
      // 字体
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i,
        include: path.resolve(__dirname, './src'),
        type: 'asset/resource',
      },
      // css module
      {
        test: /\.(module|scope|scoped)\.css$/i,
        include: path.resolve(__dirname, './src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              module: true,
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      // css
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, './src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      // less module
      {
        test: /\.module\.less$/i,
        include: path.resolve(__dirname, './src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true, // 启用 CSS Modules
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      // less
      {
        test: /\.less$/i,
        include: path.resolve(__dirname, './src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
}
