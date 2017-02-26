var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var runSequence  = require('run-sequence');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('./portfolio/')
    .pipe(webserver({
      directoryListing: false,
			fallback: 'index.html',
			host: '0.0.0.0',
			livereload: false,
			open: false,
			port: '8000'
    }));
});

// gulp.task('default', defaultTask);

// function defaultTask(done) {
// 	runSequence('sass', 
// 		done);
// }

//gulp.task('default', function() {
//  // place code for your default task here
//});