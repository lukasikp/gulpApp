var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

var config = {
	assetsDir: 'public/style',
	bowerDir: 'bower_components',
};

var app ={};

app.addStyle = function (paths){
	gulp.src(paths)
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest(config.assetsDir));

}

gulp.task('styles',function () {
	app.addStyle([
		config.bowerDir + '/bootstrap/dist/css/bootstrap.css',
		config.assetsDir + '/less/style.less',
		], 'style.css');

	// ** - wszystkie pliki z folderu
	//*.less - konczonce sie na less
	//config.assetsDir+'/less/**/*.less'
});

gulp.task('watch', function(){
	gulp.watch(config.assetsDir+'/less/**/*.less',['styles']);
});

gulp.task('default', ['styles']);
