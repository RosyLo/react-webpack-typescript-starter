const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { resolve } = require('path');

module.exports = () => {
  return {
    mode: 'development', // TODO: 判斷是 dev 還是 prod mode
    entry: {
      port: 'webpack-dev-server/client?http://localhost:8080',
      server: 'webpack/hot/dev-server',
      main: '/src/main',
    },
    output: {
      path: path.join(__dirname, 'public'),
      filename: '[name].js',
      publicPath: '/',
    },
    plugins: [
      // new OccurrenceOrderPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        filename: path.resolve(__dirname, 'public', 'index.html'),
        chunks: ['main'],
        inject: 'body',
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: `./tsconfig.json`,
          baseUrl: '.',
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.tsx?$/,
          include: path.resolve(__dirname, 'src'),
          exclude: path.resolve(__dirname, 'node_modules'),
          use: ['babel-loader'],
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 8080,
      historyApiFallback: true,
    },
  };
};
