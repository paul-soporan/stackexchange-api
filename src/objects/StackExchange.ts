import * as rp from 'request-promise';

import {Wrapper} from '../objects/Wrapper';

import {GetAnswersOptions} from '../method-options/StackExchange/GetAnswersOptions';
import {GetAnswersByIdsOptions} from '../method-options/StackExchange/GetAnswersByIdsOptions';
import {GetCommentsOptions} from '../method-options/StackExchange/GetCommentsOptions';
import {GetCommentsByIdsOptions} from '../method-options/StackExchange/GetCommentsByIdsOptions';
import {GetCommentsOnAnswersOptions} from '../method-options/StackExchange/GetCommentsOnAnswersOptions';
import {GetPrivilegesOptions} from '../method-options/StackExchange/GetPrivilegesOptions';
import {GetSitesOptions} from '../method-options/StackExchange/GetSitesOptions';
import {GetTagsOptions} from '../method-options/StackExchange/GetTagsOptions';
import {SearchOptions} from '../method-options/StackExchange/SearchOptions';
import {SimilarSearchOptions} from '../method-options/StackExchange/SimilarSearchOptions';

export class StackExchange {

  private static baseUrl: URL = new URL('https://api.stackexchange.com/2.2');

  private static semiDelimitedListHandler (list: string[] | string): string {
    if (Array.isArray(list)) {
      return list.join(';');
    }
    return list;
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
  ): Promise<Wrapper> {
    const getAnswersUrl = new URL('/answers', this.baseUrl);

    if (options.fromDate) {
      getAnswersUrl.searchParams.append('fromdate', Math.round(options.fromDate.getTime() / 1000).toString());
    }
    if (options.max) {
      getAnswersUrl.searchParams.append('max', Math.round(options.max.getTime() / 1000).toString());
    }
    if (options.min) {
      getAnswersUrl.searchParams.append('min', Math.round(options.min.getTime() / 1000).toString());
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
      getAnswersUrl.searchParams.append('todate', Math.round(options.toDate.getTime() / 1000).toString());
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
  ): Promise<Wrapper> {
    const getAnswersByIdsUrl = new URL(`/answers/${this.semiDelimitedListHandler(options.ids)}`, this.baseUrl);

    if (options.fromDate) {
      getAnswersByIdsUrl.searchParams.append('fromdate', Math.round(options.fromDate.getTime() / 1000).toString());
    }
    if (options.max) {
      getAnswersByIdsUrl.searchParams.append('max', Math.round(options.max.getTime() / 1000).toString());
    }
    if (options.min) {
      getAnswersByIdsUrl.searchParams.append('min', Math.round(options.min.getTime() / 1000).toString());
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
      getAnswersByIdsUrl.searchParams.append('todate', Math.round(options.toDate.getTime() / 1000).toString());
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
  ): Promise<Wrapper> {
    const getCommentsUrl = new URL('/comments', this.baseUrl);

    if (options.fromDate) {
      getCommentsUrl.searchParams.append('fromdate', Math.round(options.fromDate.getTime() / 1000).toString());
    }
    if (options.max) {
      getCommentsUrl.searchParams.append('max', Math.round(options.max.getTime() / 1000).toString());
    }
    if (options.min) {
      getCommentsUrl.searchParams.append('min', Math.round(options.min.getTime() / 1000).toString());
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
      getCommentsUrl.searchParams.append('todate', Math.round(options.toDate.getTime() / 1000).toString());
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
  ): Promise<Wrapper> {
    const getCommentsByIdsUrl = new URL(`/comments/${this.semiDelimitedListHandler(options.ids)}`, this.baseUrl);

    if (options.fromDate) {
      getCommentsByIdsUrl.searchParams.append('fromdate', Math.round(options.fromDate.getTime() / 1000).toString());
    }
    if (options.max) {
      getCommentsByIdsUrl.searchParams.append('max', Math.round(options.max.getTime() / 1000).toString());
    }
    if (options.min) {
      getCommentsByIdsUrl.searchParams.append('min', Math.round(options.min.getTime() / 1000).toString());
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
      getCommentsByIdsUrl.searchParams.append('todate', Math.round(options.toDate.getTime() / 1000).toString());
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
  ): Promise<Wrapper> {
    const getCommentsOnAnswersUrl = new URL(`/answers/${this.semiDelimitedListHandler(options.ids)}/comments`, this.baseUrl);

    if (options.fromDate) {
      getCommentsOnAnswersUrl.searchParams.append('fromdate', Math.round(options.fromDate.getTime() / 1000).toString());
    }
    if (options.max) {
      getCommentsOnAnswersUrl.searchParams.append('max', Math.round(options.max.getTime() / 1000).toString());
    }
    if (options.min) {
      getCommentsOnAnswersUrl.searchParams.append('min', Math.round(options.min.getTime() / 1000).toString());
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
      getCommentsOnAnswersUrl.searchParams.append('todate', Math.round(options.toDate.getTime() / 1000).toString());
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
   * A method for the /privileges endpoint: https://api.stackexchange.com/docs/privileges
   * Returns the earnable privileges on a site.
   * While fairly stable, over time they do change.
   * New ones are introduced with new features,
   * and the reputation requirements change as a site matures.
   * This method returns an array of privileges (Privilege[]) wrapped in a Wrapper.
   */
  public static async getPrivileges (
    options: GetPrivilegesOptions
  ): Promise<Wrapper> {
    const getPrivilegesUrl = new URL('/privileges', this.baseUrl);

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
  ): Promise<Wrapper> {
    const getSitesUrl = new URL('/sites', this.baseUrl);

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
  public static async getTags (options: GetTagsOptions): Promise<Wrapper> {

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

    if (options.fromDate) {
      getTagsUrl.searchParams.append('fromdate', Math.round(options.fromDate.getTime() / 1000).toString());
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
      getTagsUrl.searchParams.append('todate', Math.round(options.toDate.getTime() / 1000).toString());
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
  ): Promise<Wrapper> {
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
  ): Promise<Wrapper> {
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
  ): Promise<Wrapper> {
    const searchUrl: URL = new URL('/search', this.baseUrl);

    if (options.fromDate) {
      searchUrl.searchParams.append('fromdate', Math.round(options.fromDate.getTime() / 1000).toString());
    }
    if (options.inTitle) {
      searchUrl.searchParams.append('intitle', options.inTitle);
    } else if (!options.tagged) {
      throw Error('At least one of `tagged` or `inTitle` must be set');
    }
    if (options.max) {
      searchUrl.searchParams.append('max', Math.round(options.max.getTime() / 1000).toString());
    }
    if (options.min) {
      searchUrl.searchParams.append('min', Math.round(options.min.getTime() / 1000).toString());
    }
    if (options.notTagged) {
      if (options.tagged) {
        searchUrl.searchParams.append('nottagged', this.semiDelimitedListHandler(options.notTagged));
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
      searchUrl.searchParams.append('tagged', this.semiDelimitedListHandler(options.tagged));
    } else if (!options.inTitle) {
      throw Error('At least one of `tagged` or `inTitle` must be set');
    }
    if (options.toDate) {
      searchUrl.searchParams.append('todate', Math.round(options.toDate.getTime() / 1000).toString());
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
  ): Promise<Wrapper> {
    const similarSearchUrl: URL = new URL('/similar', this.baseUrl);

    if (options.fromDate) {
      similarSearchUrl.searchParams.append('fromdate', Math.round(options.fromDate.getTime() / 1000).toString());
    }
    if (options.max) {
      similarSearchUrl.searchParams.append('max', Math.round(options.max.getTime() / 1000).toString());
    }
    if (options.min) {
      similarSearchUrl.searchParams.append('min', Math.round(options.min.getTime() / 1000).toString());
    }
    if (options.notTagged) {
      similarSearchUrl.searchParams.append('nottagged', this.semiDelimitedListHandler(options.notTagged));
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
      similarSearchUrl.searchParams.append('tagged', this.semiDelimitedListHandler(options.tagged));
    }
    similarSearchUrl.searchParams.append('title', options.title);
    if (options.toDate) {
      similarSearchUrl.searchParams.append('todate', Math.round(options.toDate.getTime() / 1000).toString());
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
