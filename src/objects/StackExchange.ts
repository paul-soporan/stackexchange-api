import * as rp from 'request-promise';

import {Wrapper} from '../objects/Wrapper';

import {GetSitesOptions} from '../method-options/StackExchange/GetSitesOptions';
import {SearchOptions} from '../method-options/StackExchange/SearchOptions';
import {SimilarSearchOptions} from '../method-options/StackExchange/SimilarSearchOptions';

export class StackExchange {

  public static baseUrl: URL = new URL('https://api.stackexchange.com/2.2');


  /*
   * A method for the /sites endpoint: https://api.stackexchange.com/docs/sites
   * Returns all sites in the network.
   * This method returns an array of sites (Site[]) wrapperd in a Wrapper.
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
      JSON.parse(
        await rp.get(
          getSitesUrl.href, {
            headers: {
              'accept-encoding': 'gzip',
            },
            gzip: true,
          }
        )
      ), 'Site'
    );
  }


  /*
   * A method for the /search endpoint: https://api.stackexchange.com/docs/search
   * Searches a site for any questions which fit the given criteria.
   * At least one of `tagged` or `inTitle` must be set on this method.
   * `notTagged` is only used if `tagged` is also set, for performance reasons.
   * The sorts accepted by this method operate on the following fields of the Question object:
   * activity – last_activity_date
   * creation – creation_date
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
        searchUrl.searchParams.append('nottagged', options.notTagged);
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
      searchUrl.searchParams.append('tagged', options.tagged);
    } else if (!options.inTitle) {
      throw Error('At least one of `tagged` or `inTitle` must be set');
    }
    if (options.toDate) {
      searchUrl.searchParams.append('todate', Math.round(options.toDate.getTime() / 1000).toString());
    }

    return new Wrapper(
      JSON.parse(
        await rp.get(
          searchUrl.href, {
            headers: {
              'accept-encoding': 'gzip',
            },
            gzip: true,
          }
        )
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
      similarSearchUrl.searchParams.append('nottagged', options.notTagged);
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
      similarSearchUrl.searchParams.append('tagged', options.tagged);
    }
    similarSearchUrl.searchParams.append('title', options.title);
    if (options.toDate) {
      similarSearchUrl.searchParams.append('todate', Math.round(options.toDate.getTime() / 1000).toString());
    }

    return new Wrapper(
      JSON.parse(
        await rp.get(
          similarSearchUrl.href, {
            headers: {
              'accept-encoding': 'gzip',
            },
            gzip: true,
          }
        )
      ), 'Question'
    );
  }
}
