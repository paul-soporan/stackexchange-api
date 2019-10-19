import {TypeRelatedSite} from '../result-types/TypeRelatedSite';

export class RelatedSite {

  public apiSiteParameter?: string;

  public name: string;

  public relation: 'parent' | 'meta' | 'chat';

  public siteUrl: string;

  public constructor (related_site: TypeRelatedSite) {
    this.apiSiteParameter = related_site.api_site_parameter ?? null;
    this.name = related_site.name;
    this.relation = related_site.relation;
    this.siteUrl = related_site.site_url;
  }
}
