API Blueprint Template
======================

A template to write API Document with [API Blueprint](https://apiblueprint.org/generated).

## Stack

Currently using these tools to generate API document:

- [aglio](https://github.com/danielgtaylor/aglio) for API Blueprint renderer
- [drakov](https://github.com/Aconex/drakov) for mock server
- TODO: [dredd](https://github.com/apiaryio/dredd)

## Installation

```
$ npm install
```

## Usage

### Basic Usage

```zsh
# Run API doc server at http://localhost:8080
$ npm start

# Run mock server at http://localhost:8081
$ npm run mock

# List all endpoints at http://localhost:8081/drakov
$ npm run discover
```
