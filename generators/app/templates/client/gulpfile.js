var gulp = require('gulp'),
    plugins = require('gulp-load-plugins' )(),
    browserSync = require('browser-sync');

var libs = [
    'node_modules/bootstrap/dist/css/bootstrap.css',

    'node_modules/es6-shim/es6-shim.js',
    'node_modules/systemjs/dist/system.js',
    'node_modules/angular2/bundles/angular2-polyfills.js',
    'node_modules/angular2/bundles/angular2.dev.js',
    'node_modules/angular2/bundles/http.js',
    'node_modules/rxjs/bundles/Rx.js'
];

gulp.task('lib', getTask('lib'));

gulp.task('clean', getTask('clean'));

gulp.task('typescript', getTask('typescript'));

gulp.task('typescript-watch', ['typescript'], browserSync.reload);

gulp.task('css', getTask('css'));

gulp.task('css-watch', ['css'], browserSync.reload);

gulp.task('html', getTask('html'));

gulp.task('html-watch', ['html'], browserSync.reload);

gulp.task('inject', getTask('inject'));

gulp.task('serve', ['lib', 'css', 'html', 'inject', 'typescript'], getTask('serve'));

gulp.task('test', getTask('test'));

// Default Task
gulp.task('default', ['serve']);

function getTask(task) {
    return require('./tools/gulp-tasks/' + task)(gulp, plugins, libs);
}
