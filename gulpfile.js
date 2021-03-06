//initial
var gulp = require('gulp');
var compass = require('gulp-compass');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var clean = require('gulp-clean');


gulp.task('copy-html-files', function() {
	gulp.src(['./app/**/*.html', './app/index.html'], {
		base : './app'})
	.pipe(gulp.dest('build/'))
	.pipe(connect.reload())
});

gulp.task('usemin', function() {
	gulp.src('./app/index.html')
	.pipe(usemin({
		css: [minifyCss({aggressiveMerging:true}), 'concat'],
		js: [uglify()]
	}))
	.pipe(gulp.dest('build/'))
	.pipe(connect.reload())
});

gulp.task('watch', function() {
	gulp.watch(['./app/**/*.html','./app/index.html' ], ['copy-html-files']);
	gulp.watch(['./app/**/*.css', './app/css/main.css'], ['usemin']);
	gulp.watch(['./app/**/*.js', './app/js/app.js'], ['usemin']);
});

gulp.task('connect', function() {
	connect.server({
		root: 'app/',
		livereload: true
	});
}); 

//default tasks
gulp.task('default', ['watch', 'connect']);
gulp.task('build', ['copy-html-files', 'usemin']);


