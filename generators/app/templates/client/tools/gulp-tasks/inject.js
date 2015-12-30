module.exports = function (gulp, plugins, libs) {

    var sources = gulp.src(libs, {read: false});

    return function () {
        return gulp.src('./src/index.html')
                    .pipe(inject())
                    .pipe(gulp.dest('./dist'));
    };

    function inject() {
        return plugins.inject(sources, {
            transform : transformPath()
        });
    }

    function transformPath() {
        return function (filepath) {
            var directory = filepath.endsWith('.js') ? 'lib/' : 'css/';
            arguments[0] = directory + filepath.replace(/^.*\/(.*)$/, "$1");
            return plugins.inject.transform.apply(plugins.inject.transform, arguments);
        };
    }
};
