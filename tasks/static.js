const gulp = require('gulp');
const filter = require('gulp-filter');
const browserSync = require('browser-sync');

module.exports = (glob, dest) => {
    return function() {
        const stylFilter = filter(['**/*.styl'], {
            restore: true
        });

      return  gulp.src(glob)
            .pipe(gulp.dest(dest))
    }

}
