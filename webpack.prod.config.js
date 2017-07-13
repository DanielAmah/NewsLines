const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = {
  devtool: 'inline-sourcemap',
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },


  plugins: [
    new ExtractTextPlugin('public/bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new Dotenv({
      path: './.env',
      safe: false
    })
  ],

  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!sass-loader',
        }),
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      { test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=img/img-[hash:6].[ext]',
      },
    ],
  },
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
