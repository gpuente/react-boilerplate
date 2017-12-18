const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    host,
    port,
    historyApiFallback: true,
    contentBase: './',
    overlay: {
      errors: true,
      warnings: true,
    },
  },
});

exports.babelLoader = () => ({
  module: {
    rules: [{
      use: 'babel-loader',
      test: /\.jsx?$/,
      exclude: /node_modules/,
    }],
  },
});

exports.cssLoader = () => ({
  module: {
    rules: [{
      use: ['style-loader', 'css-loader'],
      test: /\.css$/,
    }],
  },
})

exports.devTools = () => ({
  devtool: 'eval-source-map',
});

exports.uglifyJsPlugin = () => ({
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
});

exports.html200 = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: '200.html',
    }),
  ],
});

exports.output = (placeholder = 'hash') => ({
  output: {
    path: path.join(__dirname, '../dist'),
    filename: `[name].[${placeholder}].js`,
    publicPath: '/',
  },
});
