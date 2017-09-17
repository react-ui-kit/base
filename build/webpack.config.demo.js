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
    library: 'react-ui-kit',
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
    modules: [path.join(__dirname), "node_modules", ".", "demo", "lib", "components", "sass", "utils"]
  },
  devServer: {
    contentBase: path.join(__dirname, "../demo/"),
    // compress: true,
    host: "0.0.0.0",
    port: 8080,
    historyApiFallback: true
  }
}

module.exports = config
