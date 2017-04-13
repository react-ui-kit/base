const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const config = {
  entry: {
    // core components
    'core/badge':     ['components/core/badge', 'sass/core/badge.scss'],
    'core/block':     ['components/core/block', 'sass/core/block.scss'],
    'core/button':    ['components/core/button', 'sass/core/button.scss'],
    'core/checkbox':  ['components/core/checkbox', 'sass/core/checkbox.scss'],
    'core/container': ['components/core/container', 'sass/core/container.scss'],
    'core/dropdown':  ['components/core/dropdown', 'sass/core/dropdown.scss'],
    'core/input':     ['components/core/input', 'sass/core/input.scss'],
    'core/modal':     ['components/core/modal', 'sass/core/modal.scss'],
    'core/quantity':  ['components/core/quantity', 'sass/core/quantity.scss'],
    'core/radio':     ['components/core/radio', 'sass/core/radio.scss'],
    'core/slider':    ['components/core/slider', 'sass/core/slider.scss'],
    'core/switch':    ['components/core/switch', 'sass/core/switch.scss'],
    'core/tab':       ['components/core/tab'],
    'core/table':     ['components/core/table', 'sass/core/table.scss'],
    'core/tabs':      ['components/core/tabs', 'sass/core/tabs.scss'],
    'core/tags':      ['components/core/tags', 'sass/core/tags.scss'],
    'core/video':     ['components/core/video', 'sass/core/video.scss'],
    'core/':          ['components/core/index'],

    // charts components
    'charts/progress': ['components/charts/progress', 'sass/charts/progress.scss'],

    // navigation components
    'navigation/menu':        ['components/navigation/menu', 'sass/navigation/menu.scss'],
    'navigation/pagination':  ['components/navigation/pagination', 'sass/navigation/pagination.scss'],

    // index components
    '.':  ['components/index']
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
      filename: '[name]/styles.css',
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
    modules: [path.join(__dirname), "node_modules", ".", "lib", "components", "sass"]
  }
}

module.exports = config
