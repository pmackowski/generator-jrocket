module.exports = function (gulp, plugins, libs) {
    return function () {

        gulp.src(libs)
            .pipe(plugins.ignore.include('**/*.css'))
            .pipe(gulp.dest('dist/css'));

        gulp.src(libs)
            .pipe(plugins.ignore.include('**/*.js'))
            .pipe(gulp.dest('dist/lib'));
    };
};
