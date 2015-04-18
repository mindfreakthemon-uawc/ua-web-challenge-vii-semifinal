var gulp = require('gulp'),
	clean = require('gulp-clean');

gulp.task('clean', function () {
	return gulp.src([
		'./public/css',
		'./public/js',
		'./public/html',
		'./public/templates.js'
	], { read: false })
		.pipe(clean());
});