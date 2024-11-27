const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {sassFalse} = require("sass");


module.exports = {
    entry: {
      main: [
          path.join(__dirname, './src/js/index'), path.join(__dirname, './src/styles/main.scss'),
      ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
              test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
              test: /\.js$/,
                exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: [
                          [
                              '@babel/preset-env',
                              {
                                  targets: "> 0.25%"
                              }
                          ]
                      ]
                  }
              },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
        })
    ]
};