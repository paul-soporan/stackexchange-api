import * as rp from 'request-promise';

import {Question} from '../objects/Question';
import {Wrapper} from '../objects/Wrapper';

import {SearchOptions} from '../method-options/StackExchange/SearchOptions';

export class StackExchange {

  public static baseUrl: URL = new URL('https://api.stackexchange.com/2.2');

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
   * This method returns a wrapped list of questions: Wrapper<Question[]>
   */
  public static async search (
    options: SearchOptions
  ): Promise<Wrapper<Question[]>> {
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

    return new Wrapper<Question[]>(
      JSON.parse(
        await rp.get(
          searchUrl.href, {
            headers: {
              'accept-encoding': 'gzip',
            },
            gzip: true,
          }
        )
      )
    );
  }
}
