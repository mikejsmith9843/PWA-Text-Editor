//Imports
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

//Workbox plugins for service wroker and manifest file
module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      //Webpack plugin that generates our html file and injefts our bundles
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "Text Editor",
      }),

      //Injects our custom service worker
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "src-sw.js",
      }),

      //Creates a manifest.json file
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: "Text Editor",
        short_name: "Text",
        description: "Keep your notes here!",
        background_color: "#225ca3",
        theme_color: "#225ca3",
        start_url: "/",
        publicPath: "/",
        icons: [
          {          src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),
    ],

    //Css Loaders and babel to webpack
    module: {
      //Css loaders
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          //Babel loader -> in order to use es6
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preser-env"],
              pluggins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
