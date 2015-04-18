var gulp = require('gulp'),
	clean = require('gulp-clean');

gulp.task('clean', function () {
	return gulp.src([
		'./public/css',
		'./public/js',
		'./public/html',
		'./public/images',
		'./public/templates.js',
		'./app/stylus/sprite.styl'
	], { read: false })
		.pipe(clean());
});