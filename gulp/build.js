var gulp = require("gulp");
var clean = require('gulp-clean');
var jspm = require("gulp-jspm-build");
var rev = require("gulp-rev");
var uglify = require("gulp-uglify");  //js压缩
var sequence = require('gulp-sequence'); //命令执行顺序
var rev = require("gulp-rev");  //文件增加hash值，防页面缓存
revreplace = require("gulp-rev-replace"); //替换文件引用名


gulp.task("build", function () {
    return jspm({
        bundleOptions: {
            minify: true,
            mangle: true
        },
        bundles: [
            {
                src: "app",
                dst: "app-bundle.js"
            }
        ]
    })
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./deploy'))
        .pipe(rev.manifest())
        .pipe(gulp.dest("./deploy"));
});


gulp.task("clean", function () {
    return gulp.src("./deploy", { read: false }).pipe(clean());
});