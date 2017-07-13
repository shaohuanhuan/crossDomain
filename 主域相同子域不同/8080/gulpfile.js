/**
 * @author monkeywang
 * Date: 17/3/27
 */
var webpackConfig = require('./webpack.config.js');
var gulp = require('gulp');
var webpack = require("webpack");
var stylus = require('gulp-stylus');
var gutil = require('gulp-util');

// Load plugins
var $ = require('gulp-load-plugins')();

/* es6 */
gulp.task("webpack", function(callback) {
  var myConfig = Object.create(webpackConfig);
  webpack(myConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
    	 // output options
    }));
    callback();
  });
});
/**
 * 编译stylus
 */
gulp.task('build.css', function () {
  /**
   * 入口主题themes，如果要新建主题，在这里添加
   * @type {[*]}
   */
  var themes = ['theme1', 'theme2'];
  themes.forEach(function (item, i) {
    gulp.src('./webApp/'+item+'/style/**/index.styl')
      .pipe(stylus({
        compress: true
      }))
      .pipe(gulp.dest('./static/'+item+'/css'));
  })

  gulp.src('./webApp/common/style/**/*.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./static/common/css'));

});

gulp.task('watch.css', function () {
  gulp.watch('./webApp/**/style/**/*.styl', ['build.css']);
});
//监听文件修改
gulp.task('watch.js', function () {
  gulp.watch(['./webApp/**/js/**/*.js'], ['webpack']);
});

// 拷贝jade
gulp.task('copy',function(){
  /**
   * 入口主题themes，如果要新建主题，在这里添加
   * @type {[*]}
   */
  var themes = ['common', 'theme1', 'theme2'];
  themes.forEach(function (item, i) {
    gulp.src('./webApp/'+item+'/views/**/*.jade')
      .pipe(gulp.dest('./static/'+item+'/views'))
    //拷贝 bootstrap 
    // gulp.src('./webApp/common/js/libs/*.js')
    //   .pipe(gulp.dest('./static/common/js/libs'))
    // gulp.src('./webApp/common/style/*.css')
    //   .pipe(gulp.dest('./static/common/css'));
    // gulp.src('./webApp/common/style/font/*')
    //   .pipe(gulp.dest('./static/common/css/font'));
  });

});

gulp.task('dev', ['build.css', 'webpack', 'copy', 'watch.css', 'watch.js']);
gulp.task('build', ['build.css', 'webpack', 'copy']);
// gulp.task('watch', ['watch.css', 'watch.js']);