/**
 * @file webpack.serve.dev.config.js
 * @desc Serve development environment.
 */
const path = require('path');
const webpack = require('webpack');
/**
 * Html load strategies - [html-webpack-plugin template option]{@link https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md}.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Fiber = require('fibers');
const DashboardPlugin = require("webpack-dashboard/plugin");

process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'development',
  entry: {
    app: './portfolio/index.js',
    print: './portfolio/print.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    /**
     * Html webpack template advanced config - [html-webpack-template]{@link https://github.com/jaketrent/html-webpack-template}
     */
    new HtmlWebpackPlugin({
      template: './portfolio/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
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
      test: /\.(sa|sc|c)ss$/,
      use: [{
        loader: 'style-loader',
        options: {
          sourceMap: true
        }
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 1 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
        }
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: [
            require('autoprefixer')({flexbox: 'no-2009', grid: 'autoplace'})
          ]
        }
      }
      // {
      //   loader: 'sass-loader',
      //   options: {
      //     sourceMap: true,
      //     implementation: require("sass"),
      //     fiber: Fiber,
      //     includePaths: ['./node_modules']
      //   }
      // }
    ]}, {
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
          name: 'layout/assets/[name].[ext]'
        }
      }]
    }]
  },
  devServer: {
    // publicPath: '/',
    // contentBase: path.resolve(__dirname, 'public'),
    // watchContentBase: true,
    hot: true,
    open: true,
    port: 3000,
    // openPage: '/acesso',
    historyApiFallback: true
  }
};
