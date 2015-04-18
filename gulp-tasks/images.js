var gulp = require('gulp'),
	sprite = require('css-sprite').stream,
	gulpif = require('gulp-if');

gulp.task('images', function () {
	gulp.src('./app/images/**/*.{png,jpg,jpeg}')
		.pipe(sprite({
			name: 'sprite',
			style: 'sprite.styl',
			cssPath: './app/stylus/',
			processor: 'stylus'
		}))
		.pipe(gulpif('*.png', gulp.dest('./public/images/'), gulp.dest('./app/stylus/')));
});
