/**
 * @author monkeywang
 * Date: 17/3/27
 */

/* 引入操作路径模块和webpack */
var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var entries = getEntry('./webApp/**/js/**/index.js'); // 获得入口js文件
var CleanPlugin = require('clean-webpack-plugin');
function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname, name;

  glob.sync(globPath).forEach(function (entry) {
    basename = path.basename(entry, path.extname(entry));
    console.log(entry)
    tmp = entry.split('/').splice(-4);
    name = tmp[0] + '/'+tmp[1]+'/' +tmp[2]; // 正确输出js和html的路径
    entries[name] = entry;
  });
  return entries;
}
module.exports = {
  /* 输入文件 */
  entry: entries,
  output: {
    /* 输出目录，没有则新建 */
    path: path.resolve(__dirname, './static'),
    /* 静态目录，可以直接从这里取文件 */
    publicPath: './static',
    /* 文件名 */
    filename: '[name].js'
  },
  module: {
    rules: [
      /* 配置ESlint */
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: "pre",
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
      {
        test: /\.js$/,
        loader: 'babel-loader',
        /* 排除模块安装目录的文件 */
        exclude: /node_modules/
      },
      {
        test: /\.jade$/,
        loader: 'jade-loader',
        /* 排除模块安装目录的文件 */
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false  // 去掉所有的console.log
      }
    })
  ]
}