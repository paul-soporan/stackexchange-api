# stackexchange-api

*A Node.js wrapper for the StackExchange API*

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
StackExchange.search({
  inTitle: 'nodejs',
  site: 'stackoverflow'
}).then((result) => {
  console.log(result);
  // Output: the Wrapper
  console.log(result.items);
  // Output: an Array of the actual results, in this case, Questions
  console.log(result.items[0]);
  // Output: the first actual result
  console.log(result.items[0].viewCount);
  // Output: the view count of the first result
});
```

### Search
* The equivalent of [/search](https://api.stackexchange.com/docs/search)
* Method of the `StackExchange` class
```js
StackExchange.search(options);
// returns a Promise<Wrapper>
```
`options` contains one or more of the key-value pairs of the [Search Options](https://api.stackexchange.com/docs/search), where the key is camelCased

**Example:**
```js
StackExchange.search({
  inTitle: 'nodejs',
  site: 'stackoverflow',
  pageSize: 1,
  sort: 'votes'
}).then((result) => {
  console.log(result.items[0].title);
  // Output: 'How can I update NodeJS and NPM to the next versions?'
});
```
