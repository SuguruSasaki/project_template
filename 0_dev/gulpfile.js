var gulp            = require('gulp');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var browser         = require('browser-sync');
var plumber         = require("gulp-plumber");

gulp.task('server', function(){
    browser({
        server: {
            baseDir: './dest/'
        }
    });
});

gulp.task('sass', function(){
    gulp.src("scss/**/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dest/etc/designs/pscom/ja-jp/css'))
        .pipe(browser.reload({stream:true}));
});

gulp.task('html', function(){
    gulp.src("dest/psvita/hardware/*.html")
        .pipe(plumber())
        .pipe(browser.reload({stream:true}));
});




gulp.task('default', ['server'], function(){
    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("dest/psvita/hardware/index.html", ['html']);
});
