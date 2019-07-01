/**
 * @file webpack.build.dev.config.js
 * @desc Build development environment.
 */
const path = require('path');
/**
 * Html load strategies - [html-webpack-plugin template option]{@link https://github.com/jantimon/html-webpack-plugin/blob/master/docs/template-option.md}.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Fiber = require('fibers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  plugins: [
    /**
     * Html webpack template advanced config - [html-webpack-template]{@link https://github.com/jaketrent/html-webpack-template}
     */
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new DashboardPlugin(),
    new CleanWebpackPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(sa|sc|c)ss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          sourceMap: true
        }
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 2 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
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
      // NOTE: Dart sass implementation.
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
          name: 'assets/[name].[ext]'
        }
      }]
    }]
  }
};
