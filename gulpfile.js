var gulp = require("gulp");
var babel = require("gulp-babel");    // 用于ES6转化ES5
var uglify = require('gulp-uglify'); // 用于压缩 JS
var requirejsOptimize = require('gulp-requirejs-optimize');
var clean = require('gulp-clean');

gulp.task("clean", function () {
  return gulp.src('docs/**')
    .pipe(clean());
});

gulp.task("copy", function () {
  return gulp.src("src/**")// 源码存放的路径
    .pipe(gulp.dest("docs")); //转换成生产的路径
});
// ES6转化为ES5
gulp.task("es6", function () {
  return gulp.src("docs/**/*.js")// ES6 源码存放的路径
    .pipe(babel())
    .pipe(gulp.dest("docs")); //转换成 ES5 存放的路径
});
// requirejs 打包
gulp.task('rjs', function () {
  return gulp.src('docs/script/index.js')
    .pipe(
      requirejsOptimize({
        baseUrl: "docs/",
        name: "script/index",
        paths: {
          text: 'lib/text'
        },
        removeCombined: true
      }))
    .pipe(gulp.dest('docs/script/'));
});

// 数据 打包
gulp.task('data', function () {
  return gulp.src('docs/script/data.js')
    .pipe(
      requirejsOptimize({
        baseUrl: "docs/",
        name: "script/data",
        removeCombined:true
      }))
    .pipe(gulp.dest('docs/script/'));
});

gulp.task('default', gulp.series('clean','copy', 'es6','rjs',function (done) {
    console.log('success')
    done()
}))