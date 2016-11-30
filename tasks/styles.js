const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const filter = require('gulp-filter');
const browserSync = require('browser-sync');


var postcss = require('gulp-postcss');


module.exports = (glob, dest) => {

    return function() {
        return gulp.src(glob)
            .pipe(sourcemaps.init())
            .pipe(postcss([ require('postcss-nested') ]))
            .pipe(concat('style.css'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(dest))
            .pipe(browserSync.stream());
    }

}
