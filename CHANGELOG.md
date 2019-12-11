# Changelog

## Release Version 1.2.0 (2019-12-11)

> Filters Update

### Features

* Filters:
  * Filters are a new complex feature, that corresponds to [Custom Filters](https://api.stackexchange.com/docs/filters)
  * They can be used inside any request method, by providing a `filter` property as an option. The `filter` property can be a `Filter` object or a string (`Filter.filter` / `'default'` / `'withbody'` / `'none'` / `'total'`)
  * More documentation and examples can be found on the wiki: [Filters](https://github.com/paul-soporan/stackexchange-api/wiki/Filters)
  * New methods on the `StackExchange` class:
    * `createFilter()`
    * `decodeFilters()`
  * Made all methods on the `StackExchange` class filterable
* Post:
  * Added a `Post` class, corresponding to Type post
  * New methods on the `StackExchange` class:
    * `getPosts()`
    * `getPostsByIds()`

### Bug Fixes

* Fixed issue badge and CircleCI status badge in README.md

### Refactoring

* All class properties are now required, because they are set to `null` if missing
* All interface properties are now optional, because they can be filtered out from requests
* Made all properties of result-types interfaces `readonly`
* Enabled `strict` and other stricter compiler options in tsconfig.json

### Dependencies

* Updated to TypeScript Version 3.7.2
* Updated Dependencies

### Documentation

* Added documentation for classes

## Release Version 1.1.0 (2019-11-2)

Besides the new features, this release includes various under-the-hood improvements that help in the development process.

### Features

* New methods on the `StackExchange` class:
  * `getSites()`
  * `similarSearch()`
  * `getPrivileges()`
  * `getAnswers()`
  * `getAnswersByIds()`
  * `getComments()`
  * `getCommentsByIds()`
  * `getCommentsOnAnswers()`
  * `getTags()`
  * `getModeratorOnlyTags()`
  * `getRequiredTags()`
  * `advancedSearch()`
  * `getBadges()`
  * `getBadgesByIds()`
  * `getNamedBadges()`
  * `getRecipientsBadges()`
  * `getRecipientsBadgesByIds()`
  * `getTagBasedBadges()`
  * `getInfo()`

## Release Version 1.0.1 (2019-10-19)

### Bug Fixes

* Fixed README

## Release Version 1.0.0 (2019-10-19)

***Initial Release***
