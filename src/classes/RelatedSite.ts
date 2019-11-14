import {TypeRelatedSite} from '../interfaces/result-types/TypeRelatedSite';

/**
 * The equivalent of [Type related_site](https://api.stackexchange.com/docs/types/related-site).<br>
 * This object represents a [[Site]] that is related in some way to another [[Site]].
 */
export class RelatedSite {

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public apiSiteParameter: string | null;

  public name: string | null;

  public relation: 'parent' | 'meta' | 'chat' | null;

  public siteUrl: string | null;

  public constructor (related_site?: TypeRelatedSite) {
    this.apiSiteParameter = related_site?.api_site_parameter ?? null;
    this.name = related_site?.name ?? null;
    this.relation = related_site?.relation ?? null;
    this.siteUrl = related_site?.site_url ?? null;
  }
}
