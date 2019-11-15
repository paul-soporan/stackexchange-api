# stackexchange-api
[![npm](https://img.shields.io/npm/v/stackexchange-api)](https://www.npmjs.com/package/stackexchange-api)
[![CircleCI](https://img.shields.io/circleci/build/gh/paul-soporan/stackexchange-api)](https://circleci.com/gh/paul-soporan/stackexchange-api)
[![npm](https://img.shields.io/npm/dw/stackexchange-api)](https://www.npmjs.com/package/stackexchange-api)
[![NPM](https://img.shields.io/npm/l/stackexchange-api)](https://github.com/paul-soporan/stackexchange-api/blob/master/LICENSE.md)
[![GitHub issues](https://img.shields.io/github/issues/paul-soporan/stackexchange-api)](https://github.com/paul-soporan/stackexchange-api/issues?q=is%3Aissue+is%3Aopen)

*A Node.js wrapper for the StackExchange API*

**[Documentation](https://paul-soporan.github.io/stackexchange-api/)**

**Disclaimer: WIP. Doesn't work with many endpoints yet.**

## Features:
* stackexchange-api provides a simple way to access the StackExchange API endpoints
* All complex data types from the API have a corresponding Object
* stackexchange-api is written in TypeScript and every field of every request option / result has (*will eventually have*) type definitions. As a result, modern editors are able to provide extensive autocompletion.

## Installation

### Using npm:
`npm install --save stackexchange-api`

#### Using yarn:
`yarn add stackexchange-api`

## Usage

**Including in a project:**

* ES6:
```js
import {StackExchange} from 'stackexchange-api';
```

* CommonJS:
```js
const StackExchangeApi = require('stackexchange-api');
```

**Example usage:**
```js
import {StackExchange} from 'stackexchange-api';
StackExchange.search({ // Equivalent to the /search endpoint. Go to https://paul-soporan.github.io/stackexchange-api/classes/stackexchange.html#search for details.
  inTitle: 'nodejs',
  site: 'stackoverflow'
}).then((result) => {
  console.log(result);
  // Output: Wrapper<Question>
  console.log(result.items);
  // Output: an array of Questions (Question[])
  console.log(result.items[0]);
  // Output: the first Question
  console.log(result.items[0].viewCount);
  // Output: the view count of the first Question
});
```
