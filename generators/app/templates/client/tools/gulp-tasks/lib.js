module.exports = function (gulp, plugins, libs) {
    return function () {
        moveLibsToDist('**/*.css', 'dist/css');
        moveLibsToDist('**/*.js', 'dist/lib');
    };

    function moveLibsToDist(pattern, distDirectory) {
        gulp.src(libs)
            .pipe(plugins.ignore.include(pattern))
            .pipe(gulp.dest(distDirectory));
    }
};
