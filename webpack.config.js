const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'production';

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname + '/src',
  entry: {
    main: './index',
    vendor: [],
  },
  output: { path: __dirname + '/dist' },
  plugins: [
    // Export NODE_ENV variable.
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    
    // Remove old build files before building.
    new CleanWebpackPlugin(['dist']),
    
    // Copy static files into /dist
    new CopyWebpackPlugin([
      { from: 'robots.txt' },
      { from: 'images' },
    ]),
    // Export assets names into file, so web-server can read it an inject into index.html
    new AssetsPlugin({ 
      filename: './dist/assets.json',
      fullPath: false
    }),
  ],
  module: {
    loaders: [
      {  // Collect and save all require('./filename.css') into css files.
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  }
}

if (NODE_ENV == 'production') {
  module.exports.output.filename = '[name].[chunkhash].js';
  
  // Collect and save vendor javascript. 
  module.exports.plugins.push(new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.[chunkhash].js"));
  
  // Save *.css filed by pattern.
  module.exports.plugins.push(new ExtractTextPlugin("[name].[chunkhash].css", {allChunks: true}));
  
  // Add AngularJS dependency injection annotations, so uglify can convert it without problems. 
  module.exports.plugins.push(new ngAnnotatePlugin({add: true}));
  
  // Uglify js code.
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    output: { comments: false },
  }));
}
else { // development
  module.exports.watch = true;
  module.exports.devtool = 'source-map';
  
  module.exports.output.filename = '[name].js';
  
  module.exports.plugins.push(new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js"));
  module.exports.plugins.push(new ExtractTextPlugin("[name].css", {allChunks: true}));
}
