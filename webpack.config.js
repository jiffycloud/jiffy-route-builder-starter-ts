const path = require('path');
var webpack = require('webpack');
const ZipPlugin = require('zip-webpack-plugin');

module.exports = {
  entry: './handler.ts',
  externals: {
    'aws-sdk': {
      commonjs: "aws-sdk",
      commonjs2: "aws-sdk",
      amd: "aws-sdk",
      root: "aws-sdk"
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader'
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
    filename: 'service.js'
  },
  plugins: [
    new ZipPlugin({
      filename: 'bundle.zip'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: true,
      compress: false,
      comments: false,
      sourceMap: false
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.webpack.js', '.js']
  }
};
