const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname)
]

const config = {
  entry: {
    'demo': ['./demo/components'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }
    ],
    preLoaders: [
      {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
    ],
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist'
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: false}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  resolve: {
    modulesDirectories: ["node_modules", ".", "components", "sass"],
    extensions: ['', '.js', '.scss', '.less', '.css'],
    root: [
      __dirname
    ]
  }
}

module.exports = config
