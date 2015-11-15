var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function() {
    browserify('./app/public/javascripts/src/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('app/public/javascripts/build/'));
});

gulp.task('sass', function() {
    gulp.src('app/public/stylesheets/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/public/stylesheets/css'));
});

gulp.task('watch', function() {
    gulp.watch("app/public/javascripts/src/**/*.jsx", ["js"])
    gulp.watch("app/public/stylesheets/scss/*.scss", ["sass"])
});

gulp.task('default', ['js', 'sass', 'watch']);
