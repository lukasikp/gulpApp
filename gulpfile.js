var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

gulp.task('default',function (){
	gulp.src('public/style/less/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('public/style'));
	// ** - wszystkie pliki z folderu
	//*.less - konczonce sie na less
});