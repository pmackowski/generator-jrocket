module.exports = function (gulp, plugins) {
    return function () {
        gulp
            .src(['src/**/*.html', '!src/index.html'])
            .pipe(gulp.dest('dist/'));
    };
};
