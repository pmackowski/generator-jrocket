module.exports = function (gulp, plugins) {
    return function () {
        gulp
            .src('src/**/*.css')
            .pipe(gulp.dest('dist/'));
    };
};