module.exports = function (gulp, plugins) {
    return function () {
        var del = require('del');
        del(['dist']);
    };
};