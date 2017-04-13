const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const config = {
  entry: {
    'demo': ['./demo/components'],
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                  plugins: () => [
                      autoprefixer({
                        browsers: ['last 2 versions']
                      })
                  ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                indentedSyntax: 'sass',
                sourceMap: false,
                includePaths: [path.resolve(__dirname)]
              }
            }
          ],
        })
      }
      /***
      ,
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
      ***/
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist',
    library: '[name]',
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: false
    })
  ],
  resolve: {
    extensions: ['.js', '.scss'],
    modules: [path.join(__dirname), "node_modules", ".", "demo", "lib", "components", "sass"]
  }
}

module.exports = config
