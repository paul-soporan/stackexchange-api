import {RelatedSite} from './RelatedSite';
import {Styling} from './Styling';

import {TypeSite} from '../result-types/TypeSite';

export class Site {

  public aliases?: string[];

  public apiSiteParameter: string;

  public audience: string;

  public closedBetaDate?: Date;

  public faviconUrl: string;

  public highResolutionIconUrl?: string;

  public iconUrl: string;

  public launchDate: Date;

  public logoUrl: string;

  public markdownExtensions?: Array<'MathJax' | 'Prettify' | 'Balsamiq' | 'jTab'>;

  public name: string;

  public openBetaDate?: Date;

  public relatedSites?: RelatedSite[];

  public siteState: 'normal' | 'closed_beta' | 'open_beta' | 'linked_meta';

  public siteType: 'main_site' | 'meta_site';

  public siteUrl: string;

  public styling: Styling;

  public twitterAccount?: string;

  public constructor (site: TypeSite) {
    this.aliases = site.aliases ?? null;
    this.apiSiteParameter = site.api_site_parameter;
    this.audience = site.audience;
    this.closedBetaDate = site.closed_beta_date ?? null;
    this.faviconUrl = site.favicon_url;
    this.highResolutionIconUrl = site.high_resolution_icon_url ?? null;
    this.iconUrl = site.icon_url;
    this.launchDate = site.launch_date;
    this.logoUrl = site.logo_url;
    this.markdownExtensions = site.markdown_extensions ?? null;
    this.name = site.name;
    this.openBetaDate = site.open_beta_date ?? null;
    if (typeof site.related_sites === 'undefined') {
      this.relatedSites = null;
    } else {
      this.relatedSites = site.related_sites
        .map((related_site) => new RelatedSite(related_site));
    }
    this.siteState = site.site_state;
    this.siteType = site.site_type;
    this.siteUrl = site.site_url;
    this.styling = new Styling(site.styling);
    this.twitterAccount = site.twitter_account ?? null;
  }
}
