// setup environment
require('dotenv').config();
// require dependencies
const gulp = require('gulp');
const tasks = require('./tasks');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();
const destination = './';


gulp.task('styles', tasks.styles(['./src/styles/**/*.pcss'], './app/css/'));
gulp.task('js', tasks.scripts(['./src/js/**/*.js'], './app/js'));

//define watchers
gulp.task('serve', () => {
  browserSync.init({
    server: "./",
    injectChanges: true,
    reloadDebounce: 500
  });
  return watch('./styles/**/*.pcss', gulp.series(['pcss']));


});


gulp.task('build', () => {
  gulp.series(['styles', 'js']);
});
