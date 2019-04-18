const path = require('path');
/**
 * Html load strategies - [html-webpack-plugin template option]{@link https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md}.
 */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
  mode: 'production',
  entry: {
    /** Change for building the selected project. */
    // app: './src/index.js',
    // print: './src/print.js'
    app: './portfolio/index.js',
    print: './portfolio/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    /**
     * Html webpack template advanced config - [html-webpack-template]{@link https://github.com/jaketrent/html-webpack-template}
     */
    new HtmlWebpackPlugin({
      /** Uncomment if not using file template. */
      // title: 'Page title template auto-generated.',
      /** Change for building the selected project. */
      // template: './src/index.html'
      template: './portfolio/index.html',
      chunks: ['app', 'print'],
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new OptimizeCSSAssets() // call the css optimizer (minification)
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader'
      }]
    }, {
      test: /\.html$/,
      use: [
        'html-loader'
      ]
    }, {
      test: /\.(md)$/,
      use: [{
        loader: "file-loader",
        options: {
          name: '[name].[ext]'
        }
      }]
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'theme/assets/[name].[ext]'
        }
      }]
    }]
  }
};
