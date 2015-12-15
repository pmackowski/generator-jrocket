module.exports = function (gulp, plugins) {
    return function () {
        gulp.src([
            'node_modules/es6-shim/es6-shim.js',
            'node_modules/systemjs/dist/system.js',
            'node_modules/angular2/bundles/angular2.dev.js',
            'node_modules/angular2/bundles/http.js'])
            .pipe(gulp.dest('dist/lib'));
    };
};