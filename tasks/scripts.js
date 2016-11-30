const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const filter = require('gulp-filter');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');
const webpack = require('gulp-webpack');

module.exports = (glob, dest) => {
	return function() {
		return gulp.src(glob)
			.pipe(sourcemaps.init())
			.pipe(babel())
			//.pipe(webpack())
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(dest))
	}

}
