'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('Jrocket generator ', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .withPrompts({
                baseName: 'jrocket',
                packageName: 'com.myapp',
                testingFramework: 'spock'
            })
            .on('end', done);
    });

    it('creates files', function () {
        assert.file([
            'server/pom.xml',
            'server/src/test/groovy/com/myapp/ApplicationSpec.groovy'
        ]);

        assert.noFile([
            'server/src/test/java/com/myapp/ApplicationTest.java'
        ]);
    });
});

describe('Jrocket generator ', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../generators/app'))
            .withPrompts({
                baseName: 'jrocket',
                packageName: 'com.myapp',
                testingFramework: 'junit'
            })
            .on('end', done);
    });

    it('creates files', function () {
        assert.file([
            'server/pom.xml',
            'server/src/test/java/com/myapp/ApplicationTest.java'
        ]);

        assert.noFile([
            'server/src/test/groovy/com/myapp/ApplicationSpec.groovy'
        ]);
    });
});
