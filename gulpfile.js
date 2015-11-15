var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default',function (){
	gulp.src('public/style/less/**/*.less')
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('public/style'));

	// ** - wszystkie pliki z folderu
	//*.less - konczonce sie na less
});