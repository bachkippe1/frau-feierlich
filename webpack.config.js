const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
   'main' : [
    './src/js/app.js',
    './src/css/main.scss',
   ]   
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/dist'
  },
  watch: true,
  module: {
      rules: [
        
          {
              test: /\.js$/,
              use: [
                  {
                      loader: 'babel-loader',
                      options: {
                          presets: ['@babel/preset-env']
                      }
                  }
              ]
          },     
          {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                  use: [
                      'css-loader',
                      'sass-loader'
                  ]
              })              
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'assets/images/'
            }
        },
        {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'assets/fonts/'
            }
        },  {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
                query: { 
                    helperDirs: [path.join(__dirname, 'src/js/helpers')], 
                    inlineRequires: '/img/' 
                }
            },        
          
      ]
  },  
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['dist'] }
    }),
    new ExtractTextPlugin({
        filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
        template: 'src/assets/html/index.hbs'
    })
  ],
};