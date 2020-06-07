const path = require(`path`);
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `./src/main.js`,
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images"
          }
        }
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  })]
};