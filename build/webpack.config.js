const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const config = {
  entry: {
    // core components
    'core/badge':     'components/core/badge',
    'core/block':     'components/core/block',
    'core/button':    'components/core/button',
    'core/checkbox':  'components/core/checkbox',
    'core/container': 'components/core/container',
    'core/dropdown':  'components/core/dropdown',
    'core/input':     'components/core/input',
    'core/modal':     'components/core/modal',
    'core/quantity':  'components/core/quantity',
    'core/radio':     'components/core/radio',
    'core/slider':    'components/core/slider',
    'core/switch':    'components/core/switch',
    'core/tab':       'components/core/tab',
    'core/table':     'components/core/table',
    'core/tabs':      'components/core/tabs',
    'core/tags':      'components/core/tags',
    'core/video':     'components/core/video',
    'core/':          'components/core/',

    // charts components
    'charts/progress':    'components/charts/progress',
    'charts/bar':         'components/charts/bar',
    'charts/horizontal':  'components/charts/horizontal',
    'charts/line':        'components/charts/line',
    'charts/stack':       'components/charts/stack',

    // navigation components
    'navigation/list':        'components/navigation/list',
    'navigation/menu':        'components/navigation/menu',
    'navigation/pagination':  'components/navigation/pagination',
    'navigation/steps':       'components/navigation/steps',

    // index components
    '.':  'components/'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.[s]css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                localIdentName: '[local]',
                modules: true,
                importLoaders: 2,
                sourceMap: true,
                camelCase: true,
                minimize: false,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
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
                sourceMap: true,
                includePaths: [path.resolve(__dirname)]
              }
            }
          ],
        })
      },
      {
        test: /\.js[x]?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ]
  },
  output: {
    filename: '[name]/index.js',
    path: path.join(__dirname, '../lib'),
    publicPath: '/lib',
    library: '[name]',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({
      filename: '[name]/style.css',
      allChunks: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        join_vars: true,
        if_return: true
      },
      output: {
        comments: false
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.scss'],
    modules: [path.join(__dirname), "node_modules", ".", "lib", "components", "sass", "utils"]
  }
}

module.exports = config
