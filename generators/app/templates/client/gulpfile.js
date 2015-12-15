var gulp = require('gulp'),
    plugins = require('gulp-load-plugins' )(),
    browserSync = require('browser-sync');

gulp.task('lib', getTask('lib'));

gulp.task('clean', getTask('clean'));

gulp.task('typescript', getTask('typescript'));

gulp.task('typescript-watch', ['typescript'], browserSync.reload);

gulp.task('css', getTask('css'));

gulp.task('css-watch', ['css'], browserSync.reload);

gulp.task('html', getTask('html'));

gulp.task('html-watch', ['html'], browserSync.reload);

gulp.task('serve', ['lib', 'css', 'html', 'typescript'], getTask('serve'));

gulp.task('test', getTask('test'));

// Default Task
gulp.task('default', ['serve']);

function getTask(task) {
    return require('./tools/gulp-tasks/' + task)(gulp, plugins);
}