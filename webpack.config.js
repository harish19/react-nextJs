var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var CssPlugIn = new ExtractTextPlugin({
  filename:'main.css'
});

module.exports = {
  entry: "./build/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist"
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use:CssPlugIn.extract({
          use:["css-loader","stylus-loader"]
        })
      }
    ]
  },
  plugins:[
    CssPlugIn
  ]
};