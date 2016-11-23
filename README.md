API Blueprint Template
======================

A template to write API Document with [API Blueprint](https://apiblueprint.org/generated)

## Stack

Currently using these tools to generate API document:

- [aglio](https://github.com/danielgtaylor/aglio) ([gulp-aglio](https://www.npmjs.com/package/gulp-aglio))
- [api-mock](https://github.com/localmed/api-mock)
- TODO: [dredd](https://github.com/apiaryio/dredd)

## Installation

```
$ npm install -g gulp
$ npm install
```

## Usage

### Basic Usage

Run

```
$ gulp
```

Then it generates api docs, runs local server at [http://localhost:8080].
It also watches file changes in `docs` and when updating it reloads the browser automatically.

### Run mock server

With [api-mock](https://github.com/localmed/api-mock).

```
$ npm install -g api-mock
$ api-mock published/index.md
```
