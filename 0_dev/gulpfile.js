var gulp            = require('gulp');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var browser         = require('browser-sync');
var plumber         = require("gulp-plumber");

gulp.task('server', function(){
    browser({
        server: {
            baseDir: './dist/'
        }
    });
});

gulp.task('sass', function(){
    gulp.src("scss/**/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browser.reload({stream:true}));
});

gulp.task('html', function(){
    gulp.src("dist/*.html")
        .pipe(plumber())
        .pipe(browser.reload({stream:true}));
});

gulp.task('js', function(){
  gulp.src("dist/js/**/*.js")
      .pipe(plumber())
      .pipe(browser.reload({stream:true}));
})


gulp.task('default', ['server'], function(){
    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("dist/**/*.html", ['html']);
    gulp.watch("dist/js/**/*.js", ['js']);
});
