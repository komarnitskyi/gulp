const gulp = require('gulp');
const filter = require('gulp-filter');
const useref = require('gulp-useref');
const pug = require('gulp-pug');

module.exports = (glob, dest) => {
    return function() {
        const indexPage = filter(['**/src/*.html'], {
            restore: true
        });

        const pugFilter = filter(['**/src/*.pug'], {
            restore: true
        });

        return gulp.src(glob)
            .pipe(pugFilter)
            .pipe(pug())
            .pipe(pugFilter.restore)
            .pipe(indexPage)
            .pipe(useref())
            .pipe(indexPage.restore)
            .pipe(gulp.dest(dest))
    }

}
