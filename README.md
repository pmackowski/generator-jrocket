# generator-jrocket [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Angular2 with Spring Boot

## Installation

First, install [Yeoman](http://yeoman.io) and generator-jrocket using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-jrocket
```

Then generate your new project:

```bash
mkdir my_application_name
cd my_application_name
yo jrocket
```

## Usage

Start server
```bash
cd server
mvn spring-boot:run
```

Start client
```bash
cd client
npm start
```

## License

MIT © [Pawel Mackowski]()


[npm-image]: https://badge.fury.io/js/generator-jrocket.svg
[npm-url]: https://npmjs.org/package/generator-jrocket
[travis-image]: https://travis-ci.org/pmackowski/generator-jrocket.svg?branch=master
[travis-url]: https://travis-ci.org/pmackowski/generator-jrocket
[daviddm-image]: https://david-dm.org/pmackowski/generator-jrocket.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/pmackowski/generator-jrocket
[coveralls-image]: https://coveralls.io/repos/pmackowski/generator-jrocket/badge.svg
[coveralls-url]: https://coveralls.io/r/pmackowski/generator-jrocket
