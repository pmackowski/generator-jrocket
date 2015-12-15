module.exports = function (gulp, plugins) {
    return function () {
        var browserSync = require('browser-sync'),
            proxy = require('proxy-middleware'),
            url = require('url');

        var proxyOptions = url.parse('http://localhost:4567/');
        proxyOptions.route = '/api';

        browserSync({
            open: true,
            port: 3000,
            server: {
                baseDir: 'dist/',
                middleware: [proxy(proxyOptions)]
            }
        });

        // add browserSync.reload to the tasks array to make
        // all browsers reload after tasks are complete.
        gulp.watch("src/**/*.ts", ['typescript-watch']);
        gulp.watch("src/**/*.css", ['css-watch']);
        gulp.watch("src/**/*.html", ['html-watch']);
    };
};