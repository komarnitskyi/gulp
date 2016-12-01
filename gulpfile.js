// setup environment
require('dotenv').config();
// require dependencies
const gulp = require('gulp');
const tasks = require('./tasks');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

const globs = {
	styles: ['./src/styles/**/*.pcss'],
	js: ['./src/js/**/*.js'],
	html: ['./src/**/*.{html,pug}']
};

gulp.task('styles', tasks.styles(globs.styles, './app/css/'));
gulp.task('js', tasks.scripts(globs.js, './app/js'));
gulp.task('html', tasks.html(globs.html, './app/'));

gulp.task('build', gulp.series('styles', 'js', 'html',(done) => done()));


//define watchers
gulp.task('serve', gulp.series('build', (done) => {

	browserSync.init({
		server: "./app/",
		injectChanges: true,
		reloadDebounce: 500
	}, done);
	watch(globs.styles, gulp.series(['styles']));
	watch(globs.js, gulp.series(['js']));
	watch(globs.html, gulp.series(['html']));


}));
