module.exports = function (gulp, plugins) {
    return function () {
        var ts = plugins.typescript;
        var tsProject = ts.createProject('tsconfig.json', {
            typescript: require('typescript')
        });

        var tsResult = tsProject.src()
            .pipe(plugins.rename(function (path) {
                path.dirname = path.dirname.replace('src','.');
            }))
            .pipe(ts(tsProject));

        tsResult.js.pipe(gulp.dest('test/'));


        var Server = require('karma').Server;
        new Server({
            configFile: process.cwd() + '/karma.conf.js',
            singleRun: true
        }).start();
    };
};