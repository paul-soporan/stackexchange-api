import * as rp from 'request-promise';

import {
  Answer,
  Badge,
  Comment,
  Filter,
  Info,
  Post,
  Privilege,
  Question,
  Site,
  Tag,
  Wrapper,
} from '../index';

import {AdvancedSearchOptions} from '../interfaces/method-options/StackExchange/AdvancedSearchOptions';
import {CreateFilterOptions} from '../interfaces/method-options/StackExchange/CreateFilterOptions';
import {DecodeFiltersOptions} from '../interfaces/method-options/StackExchange/DecodeFiltersOptions';
import {GetAnswersOptions} from '../interfaces/method-options/StackExchange/GetAnswersOptions';
import {GetAnswersByIdsOptions} from '../interfaces/method-options/StackExchange/GetAnswersByIdsOptions';
import {GetBadgesOptions} from '../interfaces/method-options/StackExchange/GetBadgesOptions';
import {GetBadgesByIdsOptions} from '../interfaces/method-options/StackExchange/GetBadgesByIdsOptions';
import {GetCommentsOptions} from '../interfaces/method-options/StackExchange/GetCommentsOptions';
import {GetCommentsByIdsOptions} from '../interfaces/method-options/StackExchange/GetCommentsByIdsOptions';
import {GetCommentsOnAnswersOptions} from '../interfaces/method-options/StackExchange/GetCommentsOnAnswersOptions';
import {GetInfoOptions} from '../interfaces/method-options/StackExchange/GetInfoOptions';
import {GetNamedOrTagBasedBadgesOptions} from '../interfaces/method-options/StackExchange/GetNamedOrTagBasedBadgesOptions';
import {GetPostsOptions} from '../interfaces/method-options/StackExchange/GetPostsOptions';
import {GetPostsByIdsOptions} from '../interfaces/method-options/StackExchange/GetPostsByIdsOptions';
import {GetPrivilegesOptions} from '../interfaces/method-options/StackExchange/GetPrivilegesOptions';
import {GetRecipientsBadgesOptions} from '../interfaces/method-options/StackExchange/GetRecipientsBadgesOptions';
import {GetRecipientsBadgesByIdsOptions} from '../interfaces/method-options/StackExchange/GetRecipientsBadgesByIdsOptions';
import {GetSitesOptions} from '../interfaces/method-options/StackExchange/GetSitesOptions';
import {GetTagsOptions} from '../interfaces/method-options/StackExchange/GetTagsOptions';
import {SearchOptions} from '../interfaces/method-options/StackExchange/SearchOptions';
import {SimilarSearchOptions} from '../interfaces/method-options/StackExchange/SimilarSearchOptions';

import {dateHandler} from '../handlers/dateHandler';
import {fieldHandler} from '../handlers/fieldHandler';
import {filterHandler} from '../handlers/filterHandler';
import {semiDelimitedListHandler} from '../handlers/semiDelimitedListHandler';

export class StackExchange {

  protected static baseUrl: URL = new URL('https://api.stackexchange.com/2.2');

  /*
   * A method for the /search/advanced endpoint: https://api.stackexchange.com/docs/advanced-search
   * Searches a site for any questions which fit the given criteria.
   * Search criteria are expressed using various parameters.
   * At least one additional parameter must be set if `notTagged` is set, for performance reasons.
   * The sorts accepted by this method operate on the following fields of the Question object:
   * activity – lastActivityDate
   * creation – creationDate
   * votes – score
   * relevance – matches the relevance tab on the site itself
   * Does not accept min or max
   * `activity` is the default sort.
   * This method returns an array of questions (Question[]) wrapped in a Wrapper.
   */
  public static async advancedSearch (
    options: AdvancedSearchOptions
  ): Promise<Wrapper<Question>> {
    const advancedSearchUrl = new URL('/search/advanced', this.baseUrl);

    if (options.accepted) {
      advancedSearchUrl.searchParams.append('accepted', options.accepted.toString());
    }
    if (options.answers) {
      advancedSearchUrl.searchParams.append('answers', options.answers.toString());
    }
    if (options.body) {
      advancedSearchUrl.searchParams.append('body', options.body);
    }
    if (options.closed) {
      advancedSearchUrl.searchParams.append('closed', options.closed.toString());
    }
    if (options.filter) {
      advancedSearchUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      advancedSearchUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.max) {
      advancedSearchUrl.searchParams.append('max', dateHandler(options.max));
    }
    if (options.migrated) {
      advancedSearchUrl.searchParams.append('migrated', options.migrated.toString());
    }
    if (options.min) {
      advancedSearchUrl.searchParams.append('min', dateHandler(options.min));
    }
    if (options.notice) {
      advancedSearchUrl.searchParams.append('notice', options.notice.toString());
    }
    if (options.notTagged) {
      if (
        options.tagged
        || options.q
        || options.title
        || options.body
        || options.url
      ) {
        advancedSearchUrl.searchParams.append('nottagged', semiDelimitedListHandler(options.notTagged));
      } else {
        throw Error('`notTagged` requires one of `tagged`, `q`, `title`, `body`, or `url` to also be specified');
      }
    }
    if (options.order) {
      advancedSearchUrl.searchParams.append('order', options.order);
    }
    if (options.page) {
      advancedSearchUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      advancedSearchUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    if (options.q) {
      advancedSearchUrl.searchParams.append('q', options.q);
    }
    advancedSearchUrl.searchParams.append('site', options.site);
    if (options.sort) {
      advancedSearchUrl.searchParams.append('sort', options.sort);
    }
    if (options.tagged) {
      advancedSearchUrl.searchParams.append('tagged', semiDelimitedListHandler(options.tagged));
    }
    if (options.title) {
      advancedSearchUrl.searchParams.append('title', options.title);
    }
    if (options.toDate) {
      advancedSearchUrl.searchParams.append('todate', dateHandler(options.toDate));
    }
    if (options.user) {
      advancedSearchUrl.searchParams.append('user', options.user.toString());
    }
    if (options.url) {
      advancedSearchUrl.searchParams.append('url', options.url);
    }
    if (options.views) {
      advancedSearchUrl.searchParams.append('views', options.views.toString());
    }
    if (options.wiki) {
      advancedSearchUrl.searchParams.append('wiki', options.wiki.toString());
    }

    return new Wrapper(
      await rp.get(
        advancedSearchUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Question'
    );
  }


  public static async createFilter (
    options: CreateFilterOptions
  ): Promise<Wrapper<Filter>> {
    const createFilterUrl = new URL(`/filters/create`, this.baseUrl);

    if (options.base) {
      createFilterUrl.searchParams.append('base', options.base);
    }
    if (options.exclude) {
      createFilterUrl.searchParams.append('exclude', fieldHandler(options.exclude));
    }
    if (options.filter) {
      createFilterUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.include) {
      createFilterUrl.searchParams.append('include', fieldHandler(options.include));
    }
    if (options.unsafe) {
      createFilterUrl.searchParams.append('unsafe', options.unsafe.toString());
    }

    return new Wrapper(
      await rp.post(
        createFilterUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Filter'
    );
  }


  public static async decodeFilters (
    options: DecodeFiltersOptions
  ): Promise<Wrapper<Filter>> {
    const decodeFiltersUrl = new URL(`/filters/${semiDelimitedListHandler(options.filters)}`, this.baseUrl);

    if (options.filter) {
      decodeFiltersUrl.searchParams.append('filter', filterHandler(options.filter));
    }

    return new Wrapper(
      await rp.get(
        decodeFiltersUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Filter'
    );
  }


  /*
   * A method for the /answers endpoint: https://api.stackexchange.com/docs/answers
   * Returns all the undeleted answers in the system.
   * The sorts accepted by this method operate on the following fields of the Answer object:
   * activity – lastActivityDate
   * creation – creationDate
   * votes – score
   * `activity` is the default sort.
   * This method returns an array of answers (Answer[]) wrapped in a Wrapper.
   */
  public static async getAnswers (
    options: GetAnswersOptions
  ): Promise<Wrapper<Answer>> {
    const getAnswersUrl = new URL('/answers', this.baseUrl);

    if (options.filter) {
      getAnswersUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      getAnswersUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.max) {
      getAnswersUrl.searchParams.append('max', dateHandler(options.max));
    }
    if (options.min) {
      getAnswersUrl.searchParams.append('min', dateHandler(options.min));
    }
    if (options.order) {
      getAnswersUrl.searchParams.append('order', options.order);
    }
    if (options.page) {
      getAnswersUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      getAnswersUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    getAnswersUrl.searchParams.append('site', options.site);
    if (options.sort) {
      getAnswersUrl.searchParams.append('sort', options.sort);
    }
    if (options.toDate) {
      getAnswersUrl.searchParams.append('todate', dateHandler(options.toDate));
    }

    return new Wrapper(
      await rp.get(
        getAnswersUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Answer'
    );
  }


  /*
   * A method for the /answers/{ids} endpoint: https://api.stackexchange.com/docs/answers-by-ids
   * Gets the set of answers identified by ids.
   * This is meant for batch fetching of questions.
   * A useful trick to poll for updates is to sort by activity,
   * with a minimum date of the last time you polled.
   * `ids` can contain up to 100 semicolon delimited ids.
   * To find ids programmatically look for answerId on Answer objects.
   * The sorts accepted by this method operate on the following fields of the Answer object:
   * activity – lastActivityDate
   * creation – creationDate
   * votes – score
   * `activity` is the default sort.
   * This method returns an array of answers (Answer[]) wrapped in a Wrapper.
   */
  public static async getAnswersByIds (
    options: GetAnswersByIdsOptions
  ): Promise<Wrapper<Answer>> {
    const getAnswersByIdsUrl = new URL(`/answers/${semiDelimitedListHandler(options.ids)}`, this.baseUrl);

    if (options.filter) {
      getAnswersByIdsUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      getAnswersByIdsUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.max) {
      getAnswersByIdsUrl.searchParams.append('max', dateHandler(options.max));
    }
    if (options.min) {
      getAnswersByIdsUrl.searchParams.append('min', dateHandler(options.min));
    }
    if (options.order) {
      getAnswersByIdsUrl.searchParams.append('order', options.order);
    }
    if (options.page) {
      getAnswersByIdsUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      getAnswersByIdsUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    getAnswersByIdsUrl.searchParams.append('site', options.site);
    if (options.sort) {
      getAnswersByIdsUrl.searchParams.append('sort', options.sort);
    }
    if (options.toDate) {
      getAnswersByIdsUrl.searchParams.append('todate', dateHandler(options.toDate));
    }

    return new Wrapper(
      await rp.get(
        getAnswersByIdsUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Answer'
    );
  }


  /*
   * A method for the /badges endpoint: https://api.stackexchange.com/docs/badges
   * Returns all the badges in the system.
   * This method returns an array of badges (Badge[]) wrapped in a Wrapper.
   */
  public static async getBadges (
    options: GetBadgesOptions
  ): Promise<Wrapper<Badge>> {
    let getBadgesUrlPath = '/badges';

    if (options.named) {
      if (options.tagBased) {
        throw Error('The `named` and `tagBased` options are mutually exclusive');
      } else {
        getBadgesUrlPath += '/name';
      }
    }

    if (options.tagBased) {
      if (options.named) {
        throw Error('The `named` and `tagBased` options are mutually exclusive');
      } else {
        getBadgesUrlPath += '/tags';
      }
    }

    const getBadgesUrl = new URL(getBadgesUrlPath, this.baseUrl);

    if (options.filter) {
      getBadgesUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      getBadgesUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.inName) {
      getBadgesUrl.searchParams.append('inname', options.inName);
    }
    if (options.max) {
      getBadgesUrl.searchParams.append('max', options.max);
    }
    if (options.min) {
      getBadgesUrl.searchParams.append('min', options.min);
    }
    if (options.order) {
      getBadgesUrl.searchParams.append('order', options.order);
    }
    if (options.page) {
      getBadgesUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      getBadgesUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    getBadgesUrl.searchParams.append('site', options.site);
    if (options.sort) {
      getBadgesUrl.searchParams.append('sort', options.sort);
    }
    if (options.toDate) {
      getBadgesUrl.searchParams.append('todate', dateHandler(options.toDate));
    }

    return new Wrapper(
      await rp.get(
        getBadgesUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Badge'
    );
  }


  /*
   * A method for the /badges/{ids} endpoint: https://api.stackexchange.com/docs/badges-by-ids
   * Gets the badges identified in id.
   * {ids} can contain up to 100 semicolon delimited ids.
   * To find ids programmatically look for badgeId on Badge objects.
   * This method returns an array of badges (Badge[]) wrapped in a Wrapper.
   */
  public static async getBadgesByIds (
    options: GetBadgesByIdsOptions
  ): Promise<Wrapper<Badge>> {
    const getBadgesByIdsUrl = new URL(`/badges/${semiDelimitedListHandler(options.ids)}`, this.baseUrl);

    if (options.filter) {
      getBadgesByIdsUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      getBadgesByIdsUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.max) {
      getBadgesByIdsUrl.searchParams.append('max', options.max);
    }
    if (options.min) {
      getBadgesByIdsUrl.searchParams.append('min', options.min);
    }
    if (options.order) {
      getBadgesByIdsUrl.searchParams.append('order', options.order);
    }
    if (options.page) {
      getBadgesByIdsUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      getBadgesByIdsUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    getBadgesByIdsUrl.searchParams.append('site', options.site);
    if (options.sort) {
      getBadgesByIdsUrl.searchParams.append('sort', options.sort);
    }
    if (options.toDate) {
      getBadgesByIdsUrl.searchParams.append('todate', dateHandler(options.toDate));
    }

    return new Wrapper(
      await rp.get(
        getBadgesByIdsUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Badge'
    );
  }


  /*
   * A method for the /badges/name endpoint: https://api.stackexchange.com/docs/badges-by-name
   * Gets all explicitly named badges in the system.
   * This method returns an array of badges (Badge[]) wrapped in a Wrapper.
   */
  public static getNamedBadges (
    options: GetNamedOrTagBasedBadgesOptions
  ): Promise<Wrapper<Badge>> {
    return this.getBadges({
      ...options,
      named: true,
    });
  }


  /*
   * A method for the /badges/tags endpoint: https://api.stackexchange.com/docs/badges-by-tag
   * Returns the badges that are awarded for participation in specific tags.
   * This method returns an array of badges (Badge[]) wrapped in a Wrapper.
   */
  public static getTagBasedBadges (
    options: GetNamedOrTagBasedBadgesOptions
  ): Promise<Wrapper<Badge>> {
    return this.getBadges({
      ...options,
      tagBased: true,
    });
  }


  /*
   * A method for the /badges/recipients endpoint: https://api.stackexchange.com/docs/badges-recipients
   * Returns recently awarded badges in the system.
   * As these badges have been awarded, they will have the Badge.user property set.
   * This method returns an array of badges (Badge[]) wrapped in a Wrapper.
   */
  public static async getRecipientsBadges (
    options: GetRecipientsBadgesOptions
  ): Promise<Wrapper<Badge>> {
    const getRecipientsBadgesUrl = new URL('/badges/recipients', this.baseUrl);

    if (options.filter) {
      getRecipientsBadgesUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      getRecipientsBadgesUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.page) {
      getRecipientsBadgesUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      getRecipientsBadgesUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    getRecipientsBadgesUrl.searchParams.append('site', options.site);
    if (options.toDate) {
      getRecipientsBadgesUrl.searchParams.append('todate', dateHandler(options.toDate));
    }

    return new Wrapper(
      await rp.get(
        getRecipientsBadgesUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Badge'
    );
  }


  /*
   * A method for the /badges/{ids}/recipients endpoint: https://api.stackexchange.com/docs/badges-recipients-by-ids
   * Returns recently awarded badges in the system, constrained to a certain set of badges.
   * As these badges have been awarded, they will have the Badge.user property set.
   * {ids} can contain up to 100 semicolon delimited ids.
   * To find ids programmatically look for badgeId on Badge objects.
   * This method returns an array of badges (Badge[]) wrapped in a Wrapper.
   */
  public static async getRecipientsBadgesByIds (
    options: GetRecipientsBadgesByIdsOptions
  ): Promise<Wrapper<Badge>> {
    const getRecipientsBadgesByIdsUrl = new URL(`/badges/${semiDelimitedListHandler(options.ids)}/recipients`, this.baseUrl);

    if (options.filter) {
      getRecipientsBadgesByIdsUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      getRecipientsBadgesByIdsUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.page) {
      getRecipientsBadgesByIdsUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      getRecipientsBadgesByIdsUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    getRecipientsBadgesByIdsUrl.searchParams.append('site', options.site);
    if (options.toDate) {
      getRecipientsBadgesByIdsUrl.searchParams.append('todate', dateHandler(options.toDate));
    }

    return new Wrapper(
      await rp.get(
        getRecipientsBadgesByIdsUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Badge'
    );
  }


  /*
   * A method for the /comments endpoint: https://api.stackexchange.com/docs/comments
   * Gets all the comments on the site.
   * The sorts accepted by this method operate on the following fields of the Comment object:
   * creation – creationDate
   * votes – score
   * `creation` is the default sort.
   * This method returns an array of comments (Comment[]) wrapped in a Wrapper.
   */
  public static async getComments (
    options: GetCommentsOptions
  ): Promise<Wrapper<Comment>> {
    const getCommentsUrl = new URL('/comments', this.baseUrl);

    if (options.filter) {
      getCommentsUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      getCommentsUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.max) {
      getCommentsUrl.searchParams.append('max', dateHandler(options.max));
    }
    if (options.min) {
      getCommentsUrl.searchParams.append('min', dateHandler(options.min));
    }
    if (options.order) {
      getCommentsUrl.searchParams.append('order', options.order);
    }
    if (options.page) {
      getCommentsUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      getCommentsUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    getCommentsUrl.searchParams.append('site', options.site);
    if (options.sort) {
      getCommentsUrl.searchParams.append('sort', options.sort);
    }
    if (options.toDate) {
      getCommentsUrl.searchParams.append('todate', dateHandler(options.toDate));
    }

    return new Wrapper(
      await rp.get(
        getCommentsUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Comment'
    );
  }


  /*
   * A method for the /comments/{ids} endpoint: https://api.stackexchange.com/docs/comments-by-ids
   * Gets the comments identified in id.
   * `ids` can contain up to 100 semicolon delimited ids.
   * To find ids programmatically look for commentId on Comment objects.
   * The sorts accepted by this method operate on the following fields of the Comment object:
   * creation – creationDate
   * votes – score
   * `creation` is the default sort.
   * This method returns an array of comments (Comment[]) wrapped in a Wrapper.
   */
  public static async getCommentsByIds (
    options: GetCommentsByIdsOptions
  ): Promise<Wrapper<Comment>> {
    const getCommentsByIdsUrl = new URL(`/comments/${semiDelimitedListHandler(options.ids)}`, this.baseUrl);

    if (options.filter) {
      getCommentsByIdsUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      getCommentsByIdsUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.max) {
      getCommentsByIdsUrl.searchParams.append('max', dateHandler(options.max));
    }
    if (options.min) {
      getCommentsByIdsUrl.searchParams.append('min', dateHandler(options.min));
    }
    if (options.order) {
      getCommentsByIdsUrl.searchParams.append('order', options.order);
    }
    if (options.page) {
      getCommentsByIdsUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      getCommentsByIdsUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    getCommentsByIdsUrl.searchParams.append('site', options.site);
    if (options.sort) {
      getCommentsByIdsUrl.searchParams.append('sort', options.sort);
    }
    if (options.toDate) {
      getCommentsByIdsUrl.searchParams.append('todate', dateHandler(options.toDate));
    }

    return new Wrapper(
      await rp.get(
        getCommentsByIdsUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Comment'
    );
  }


  /*
   * A method for the /answers/{ids}/comments endpoint: https://api.stackexchange.com/docs/comments-on-answers
   * Gets the comments on a set of answers.
   * `ids` can contain up to 100 semicolon delimited ids.
   * To find ids programmatically look for answerId on Answer objects.
   * The sorts accepted by this method operate on the following fields of the Comment object:
   * creation – creationDate
   * votes – score
   * `creation` is the default sort.
   * This method returns an array of comments (Comment[]) wrapped in a Wrapper.
   */
  public static async getCommentsOnAnswers (
    options: GetCommentsOnAnswersOptions
  ): Promise<Wrapper<Comment>> {
    const getCommentsOnAnswersUrl = new URL(`/answers/${semiDelimitedListHandler(options.ids)}/comments`, this.baseUrl);

    if (options.filter) {
      getCommentsOnAnswersUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      getCommentsOnAnswersUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.max) {
      getCommentsOnAnswersUrl.searchParams.append('max', dateHandler(options.max));
    }
    if (options.min) {
      getCommentsOnAnswersUrl.searchParams.append('min', dateHandler(options.min));
    }
    if (options.order) {
      getCommentsOnAnswersUrl.searchParams.append('order', options.order);
    }
    if (options.page) {
      getCommentsOnAnswersUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      getCommentsOnAnswersUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    getCommentsOnAnswersUrl.searchParams.append('site', options.site);
    if (options.sort) {
      getCommentsOnAnswersUrl.searchParams.append('sort', options.sort);
    }
    if (options.toDate) {
      getCommentsOnAnswersUrl.searchParams.append('todate', dateHandler(options.toDate));
    }

    return new Wrapper(
      await rp.get(
        getCommentsOnAnswersUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Comment'
    );
  }


  /*
   * A method for the /info endpoint: https://api.stackexchange.com/docs/info
   * Returns a collection of statistics about the site.
   * Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.
   * This method returns an array of info objects (Info[]) wrapped in a Wrapper.
   */
  public static async getInfo (
    options: GetInfoOptions
  ): Promise<Wrapper<Info>> {
    const getInfoUrl = new URL('/info', this.baseUrl);

    if (options.filter) {
      getInfoUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    getInfoUrl.searchParams.append('site', options.site);

    return new Wrapper(
      await rp.get(
        getInfoUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Info'
    );
  }


  public static async getPosts (
    options: GetPostsOptions
  ): Promise<Wrapper<Post>> {
    const getPostsUrl = new URL('/posts', this.baseUrl);

    if (options.filter) {
      getPostsUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      getPostsUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.max) {
      getPostsUrl.searchParams.append('max', dateHandler(options.max));
    }
    if (options.min) {
      getPostsUrl.searchParams.append('min', dateHandler(options.min));
    }
    if (options.order) {
      getPostsUrl.searchParams.append('order', options.order);
    }
    if (options.page) {
      getPostsUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      getPostsUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    getPostsUrl.searchParams.append('site', options.site);
    if (options.sort) {
      getPostsUrl.searchParams.append('sort', options.sort);
    }
    if (options.toDate) {
      getPostsUrl.searchParams.append('todate', dateHandler(options.toDate));
    }

    return new Wrapper(
      await rp.get(
        getPostsUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Post'
    );
  }


  public static async getPostsByIds (
    options: GetPostsByIdsOptions
  ): Promise<Wrapper<Post>> {
    const getPostsByIdsUrl = new URL(`/posts/${semiDelimitedListHandler(options.ids)}`, this.baseUrl);

    if (options.filter) {
      getPostsByIdsUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      getPostsByIdsUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.max) {
      getPostsByIdsUrl.searchParams.append('max', dateHandler(options.max));
    }
    if (options.min) {
      getPostsByIdsUrl.searchParams.append('min', dateHandler(options.min));
    }
    if (options.order) {
      getPostsByIdsUrl.searchParams.append('order', options.order);
    }
    if (options.page) {
      getPostsByIdsUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      getPostsByIdsUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    getPostsByIdsUrl.searchParams.append('site', options.site);
    if (options.sort) {
      getPostsByIdsUrl.searchParams.append('sort', options.sort);
    }
    if (options.toDate) {
      getPostsByIdsUrl.searchParams.append('todate', dateHandler(options.toDate));
    }

    return new Wrapper(
      await rp.get(
        getPostsByIdsUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Post'
    );
  }


  /*
   * A method for the /privileges endpoint: https://api.stackexchange.com/docs/privileges
   * Returns the earnable privileges on a site.
   * While fairly stable, over time they do change.
   * New ones are introduced with new features,
   * and the reputation requirements change as a site matures.
   * This method returns an array of privileges (Privilege[]) wrapped in a Wrapper.
   */
  public static async getPrivileges (
    options: GetPrivilegesOptions
  ): Promise<Wrapper<Privilege>> {
    const getPrivilegesUrl = new URL('/privileges', this.baseUrl);

    if (options.filter) {
      getPrivilegesUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.page) {
      getPrivilegesUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      getPrivilegesUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    getPrivilegesUrl.searchParams.append('site', options.site);

    return new Wrapper(
      await rp.get(
        getPrivilegesUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Privilege'
    );
  }


  /*
   * A method for the /sites endpoint: https://api.stackexchange.com/docs/sites
   * Returns all sites in the network.
   * This method returns an array of sites (Site[]) wrapped in a Wrapper.
   */
  public static async getSites (
    options: GetSitesOptions
  ): Promise<Wrapper<Site>> {
    const getSitesUrl = new URL('/sites', this.baseUrl);

    if (options.filter) {
      getSitesUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.page) {
      getSitesUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      getSitesUrl.searchParams.append('pagesize', options.pageSize.toString());
    }

    return new Wrapper(
      await rp.get(
        getSitesUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Site'
    );
  }


  /*
   * A method for the /tags endpoint: https://api.stackexchange.com/docs/tags
   * Returns the tags found on a site.
   * The inName parameter lets a consumer filter down to tags
   * that contain a certain substring.
   * For example, inName: 'own' would return both 'download' and 'owner' amongst others.
   * The sorts accepted by this method operate on the following fields of the Tag object:
   * popular – count
   * activity  – the creationDate of the last Question asked with the tag
   * name – name
   * `popular` is the default sort.
   * This method returns an array of tags (Tag[]) wrapped in a Wrapper.
   */
  public static async getTags (options: GetTagsOptions): Promise<Wrapper<Tag>> {

    let getTagsUrlPath = '/tags';

    if (options.moderatorOnly) {
      if (options.required) {
        throw Error('The `moderatorOnly` and `required` options are mutually exclusive');
      } else {
        getTagsUrlPath += '/moderator-only';
      }
    }
    if (options.required) {
      if (options.moderatorOnly) {
        throw Error('The `moderatorOnly` and `required` options are mutually exclusive');
      } else {
        getTagsUrlPath += '/required';
      }
    }

    const getTagsUrl = new URL(getTagsUrlPath, this.baseUrl);

    if (options.filter) {
      getTagsUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      getTagsUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.inName) {
      getTagsUrl.searchParams.append('inname', options.inName);
    }
    if (options.max) {
      getTagsUrl.searchParams.append('max', options.max.toString());
    }
    if (options.min) {
      getTagsUrl.searchParams.append('min', options.min.toString());
    }
    if (options.order) {
      getTagsUrl.searchParams.append('order', options.order);
    }
    if (options.page) {
      getTagsUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      getTagsUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    getTagsUrl.searchParams.append('site', options.site);
    if (options.sort) {
      getTagsUrl.searchParams.append('sort', options.sort);
    }
    if (options.toDate) {
      getTagsUrl.searchParams.append('todate', dateHandler(options.toDate));
    }

    return new Wrapper(
      await rp.get(
        getTagsUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Tag'
    );
  }


  /*
   * A method for the /tags/moderator-only endpoint: https://api.stackexchange.com/docs/moderator-only-tags
   * Returns the tags found on a site that only moderators can use
   * Accepts the same options as the getTags() method, minus `moderatorOnly` and `required`
   * This method returns an array of tags (Tag[]) wrapped in a Wrapper.
   */
  public static getModeratorOnlyTags (
    options: Omit<GetTagsOptions, 'moderatorOnly' | 'required'>
  ): Promise<Wrapper<Tag>> {
    return this.getTags({
      ...options,
      moderatorOnly: true,
    });
  }


  /*
   * A method for the /tags/required endpoint: https://api.stackexchange.com/docs/required-tags
   * Returns the tags found on a site that fulfill required tag constraints on questions.
   * Accepts the same options as the getTags() method, minus `moderatorOnly` and `required`
   * This method returns an array of tags (Tag[]) wrapped in a Wrapper.
   */
  public static getRequiredTags (
    options: Omit<GetTagsOptions, 'moderatorOnly' | 'required'>
  ): Promise<Wrapper<Tag>> {
    return this.getTags({
      ...options,
      required: true,
    });
  }


  /*
   * A method for the /search endpoint: https://api.stackexchange.com/docs/search
   * Searches a site for any questions which fit the given criteria.
   * At least one of `tagged` or `inTitle` must be set on this method.
   * `notTagged` is only used if `tagged` is also set, for performance reasons.
   * The sorts accepted by this method operate on the following fields of the Question object:
   * activity – lastActivityDate
   * creation – creationDate
   * votes – score
   * relevance – matches the relevance tab on the site itself
   * Does not accept min or max
   * `activity` is the default sort.
   * This method returns an array of questions (Question[]) wrapped in a Wrapper.
   */
  public static async search (
    options: SearchOptions
  ): Promise<Wrapper<Question>> {
    const searchUrl: URL = new URL('/search', this.baseUrl);

    if (options.filter) {
      searchUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      searchUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.inTitle) {
      searchUrl.searchParams.append('intitle', options.inTitle);
    } else if (!options.tagged) {
      throw Error('At least one of `tagged` or `inTitle` must be set');
    }
    if (options.max) {
      searchUrl.searchParams.append('max', dateHandler(options.max));
    }
    if (options.min) {
      searchUrl.searchParams.append('min', dateHandler(options.min));
    }
    if (options.notTagged) {
      if (options.tagged) {
        searchUrl.searchParams.append('nottagged', semiDelimitedListHandler(options.notTagged));
      } else {
        throw Error('`notTagged` may only be set if `tagged` is also set');
      }
    }
    if (options.order) {
      searchUrl.searchParams.append('order', options.order);
    }
    if (options.page) {
      searchUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      searchUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    searchUrl.searchParams.append('site', options.site);
    if (options.sort) {
      if (options.sort === 'relevance' && (options.max || options.min)) {
        throw Error('When `sort` is set to "relevance", the search method does not accept `min` or `max`');
      }
      searchUrl.searchParams.append('sort', options.sort);
    }
    if (options.tagged) {
      searchUrl.searchParams.append('tagged', semiDelimitedListHandler(options.tagged));
    } else if (!options.inTitle) {
      throw Error('At least one of `tagged` or `inTitle` must be set');
    }
    if (options.toDate) {
      searchUrl.searchParams.append('todate', dateHandler(options.toDate));
    }

    return new Wrapper(
      await rp.get(
        searchUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Question'
    );
  }


  /*
   * A method for the /similar endpoint: https://api.stackexchange.com/docs/similar
   * Returns questions which are similar to a hypothetical one based on a title and tag combination.
   * This method is roughly equivalent to a site's related questions suggestion on the ask page.
   * This method is useful for correlating data outside of a Stack Exchange site with similar content within one.
   * Note that `title` must always be passed as a parameter. `tagged` and `notTagged` are optional, semi-colon delimited lists of tags.
   * If `tagged` is passed it is treated as a preference, there is no guarantee that questions returned will have any of those tags. `notTagged` is treated as a requirement, no questions will be returned with those tags.
   * The sorts accepted by this method operate on the following fields of the Question object:
   * activity – last_activity_date
   * creation – creation_date
   * votes – score
   * relevance – order by "how similar" the questions are, most likely candidate first with a descending order
   * Does not accept min or max
   * `activity` is the default sort.
   * This method returns an array of questions (Question[]) wrapped in a Wrapper.
   */
  public static async similarSearch (
    options: SimilarSearchOptions
  ): Promise<Wrapper<Question>> {
    const similarSearchUrl: URL = new URL('/similar', this.baseUrl);

    if (options.filter) {
      similarSearchUrl.searchParams.append('filter', filterHandler(options.filter));
    }
    if (options.fromDate) {
      similarSearchUrl.searchParams.append('fromdate', dateHandler(options.fromDate));
    }
    if (options.max) {
      similarSearchUrl.searchParams.append('max', dateHandler(options.max));
    }
    if (options.min) {
      similarSearchUrl.searchParams.append('min', dateHandler(options.min));
    }
    if (options.notTagged) {
      similarSearchUrl.searchParams.append('nottagged', semiDelimitedListHandler(options.notTagged));
    }
    if (options.order) {
      similarSearchUrl.searchParams.append('order', options.order);
    }
    if (options.page) {
      similarSearchUrl.searchParams.append('page', options.page.toString());
    }
    if (options.pageSize) {
      similarSearchUrl.searchParams.append('pagesize', options.pageSize.toString());
    }
    similarSearchUrl.searchParams.append('site', options.site);
    if (options.sort) {
      if (options.sort === 'relevance' && (options.max || options.min)) {
        throw Error('When `sort` is set to "relevance", the search method does not accept `min` or `max`');
      }
      similarSearchUrl.searchParams.append('sort', options.sort);
    }
    if (options.tagged) {
      similarSearchUrl.searchParams.append('tagged', semiDelimitedListHandler(options.tagged));
    }
    similarSearchUrl.searchParams.append('title', options.title);
    if (options.toDate) {
      similarSearchUrl.searchParams.append('todate', dateHandler(options.toDate));
    }

    return new Wrapper(
      await rp.get(
        similarSearchUrl.href, {
          headers: {
            'accept-encoding': 'gzip',
          },
          gzip: true,
          json: true,
        }
      ), 'Question'
    );
  }
}
