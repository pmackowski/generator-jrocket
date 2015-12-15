'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the finest ' + chalk.red('generator-jrocket') + ' generator!'
    ));

    var prompts = [
      {
        type: 'string',
        name: 'baseName',
        message: ' 1) What is the base name of the application?',
        default: 'app'
      },
      {
        type: 'string',
        name: 'packageName',
        message: ' 2) What is your default package name?',
        default: 'com.myapp'
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      this.baseName = this.props.baseName;
      this.packageName = this.props.packageName;

      done();
    }.bind(this));
  },

  writing: function () {

    // create server
    var serverDir = 'server/';
    this.template(serverDir + 'pom.xml', serverDir + 'pom.xml', this, {});

    var packageFolder = this.packageName.replace(/\./g, '/');
    var srcDir = serverDir + 'src/main/java/';
    var srcDestDir = srcDir + packageFolder + '/';

    this.template(srcDir + 'Application.java', srcDestDir + 'Application.java', this, {});
    this.template(srcDir + 'config/spark/JsonUtil.java', srcDestDir + 'config/spark/JsonUtil.java', this, {});
    this.template(srcDir + 'config/spark/Spark.java', srcDestDir + 'config/spark/Spark.java', this, {});
    this.template(srcDir + 'config/spark/SparkConfiguration.java', srcDestDir + 'config/spark/SparkConfiguration.java', this, {});
    this.template(srcDir + 'rest/HelloSpark.java', srcDestDir + 'rest/HelloSpark.java', this, {});

    var resourcesDir = serverDir + 'src/main/resources/';
    this.template(resourcesDir + 'application.properties', resourcesDir + 'application.properties', this, {});
    this.template(resourcesDir + 'logback.xml', resourcesDir + 'logback.xml', this, {});

    // create client
    var clientDir = 'client/';
    this.template(clientDir + 'gulpfile.js', clientDir + 'gulpfile.js', this, {});
    this.template(clientDir + 'karma.conf.js', clientDir + 'karma.conf.js', this, {});
    this.template(clientDir + 'package.json', clientDir + 'package.json', this, {});
    this.template(clientDir + 'test-main.js', clientDir + 'test-main.js', this, {});
    this.template(clientDir + 'tsconfig.json', clientDir + 'tsconfig.json', this, {});
    this.template(clientDir + 'tsd.json', clientDir + 'tsd.json', this, {});

    var clientSrcDir = 'client/src/';
    this.template(clientSrcDir + 'index.html', clientSrcDir + 'index.html', this, {});
    this.template(clientSrcDir + 'bootstrap.ts', clientSrcDir + 'bootstrap.ts', this, {});

    var clientComponentsSrcDir = clientSrcDir + 'components/';
    this.template(clientComponentsSrcDir + 'app/app.component.ts', clientComponentsSrcDir + 'app/app.component.ts', this, {});
    this.template(clientComponentsSrcDir + 'app/app.component.spec.ts', clientComponentsSrcDir + 'app/app.component.spec.ts', this, {});

    var clientServicesSrcDir = clientSrcDir + 'services/';
    this.template(clientServicesSrcDir + 'hello-world.service.ts', clientServicesSrcDir + 'hello-world.service.ts', this, {});

    var clientToolsDir = 'client/tools/';
    var clientToolsGulpTasksSrcDir = clientToolsDir + 'gulp-tasks/';
    this.template(clientToolsGulpTasksSrcDir + 'clean.js', clientToolsGulpTasksSrcDir + 'clean.js', this, {});
    this.template(clientToolsGulpTasksSrcDir + 'css.js', clientToolsGulpTasksSrcDir + 'css.js', this, {});
    this.template(clientToolsGulpTasksSrcDir + 'html.js', clientToolsGulpTasksSrcDir + 'html.js', this, {});
    this.template(clientToolsGulpTasksSrcDir + 'lib.js', clientToolsGulpTasksSrcDir + 'lib.js', this, {});
    this.template(clientToolsGulpTasksSrcDir + 'serve.js', clientToolsGulpTasksSrcDir + 'serve.js', this, {});
    this.template(clientToolsGulpTasksSrcDir + 'test.js', clientToolsGulpTasksSrcDir + 'test.js', this, {});
    this.template(clientToolsGulpTasksSrcDir + 'typescript.js', clientToolsGulpTasksSrcDir + 'typescript.js', this, {});

    var clientToolsTypingsSrcDir = clientToolsDir + 'typings/';
    this.template(clientToolsTypingsSrcDir + 'tsd.d.ts', clientToolsTypingsSrcDir + 'tsd.d.ts', this, {});

    this.config.set('baseName', this.baseName);
    this.config.set('packageName', this.packageName);
  },

  install: function () {
    //this.installDependencies();
  }
});
