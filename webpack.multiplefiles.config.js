const path = require("path");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");


const styleCss = new ExtractTextWebpackPlugin({
  filename:'style.css'
});

const mainCss = new ExtractTextWebpackPlugin({
  filename:'main.css'
});
module.exports = {
  entry: './app.js',

  module: {
    rules: [
      {
        test: /\.styl$/,
        use: styleCss.extract({
          use:["css-loader","stylus-loader"], 
          publicPath: "/"
        }),
      },
      {
        test: /\.styl$/,
        use: mainCss.extract({
          use:["css-loader","stylus-loader"], 
          publicPath: "/"
        }),
      }
    ],
  },
  plugins: [styleCss,mainCss]
};