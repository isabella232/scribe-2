var gulp = require('gulp');
var runSequence = require('run-sequence');

// gulp.task('default', [
//   'recommended',
//   'build',
//   'assets',
//   'sass',
//   'cleanup',
//   'browser-sync',
//   'watch'
// ]);

gulp.task('default', function(callback) {
  runSequence('recommended',
    ['build', 'assets','sass','watch'],
    'cleanup',
    'browser-sync',
    callback);
});