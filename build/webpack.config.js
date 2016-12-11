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
    // core components
    'components/core/badge': ['components/core/badge'],
    'components/core/block': ['components/core/block'],
    'components/core/button': ['components/core/button'],
    'components/core/checkbox': ['components/core/checkbox'],
    'components/core/container': ['components/core/container'],
    'components/core/dropdown': ['components/core/dropdown'],
    'components/core/input': ['components/core/input'],
    'components/core/modal': ['components/core/modal'],
    'components/core/quantity': ['components/core/quantity'],
    'components/core/radio': ['components/core/radio'],
    'components/core/slider': ['components/core/slider'],
    'components/core/switch': ['components/core/switch'],
    'components/core/tab': ['components/core/tab'],
    'components/core/table': ['components/core/table'],
    'components/core/tabs': ['components/core/tabs'],
    'components/core/tags': ['components/core/tags'],
    'components/core/video': ['components/core/video'],
    
    // charts components
    'components/charts/progress': ['components/charts/progress'],
    
    // navigation components
    'components/navigation/menu': ['components/navigation/menu'],
    'components/navigation/pagination': ['components/navigation/pagination'],
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
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, '../lib'),
    publicPath: '/lib'
  },
  plugins: [
    new ExtractTextPlugin('[name].css', {allChunks: false}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
        screw_ie8: true
      }
    })
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    modulesDirectories: ["node_modules", ".", "components", "sass"],
    extensions: ['', '.js', '.scss'],
    root: [__dirname]
  }
}

module.exports = config
