import {RelatedSite} from './RelatedSite';
import {Styling} from './Styling';

import {TypeSite} from '../interfaces/result-types/TypeSite';

/**
 * The equivalent of [Type site](https://api.stackexchange.com/docs/types/site).<br>
 * This object represents a Site in the [Stack Exchange network](https://stackexchange.com/sites).
 */
export class Site {

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public aliases: string[] | null;

  public apiSiteParameter: string | null;

  public audience: string | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public closedBetaDate: Date | null;

  public faviconUrl: string | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public highResolutionIconUrl: string | null;

  public iconUrl: string | null;

  public launchDate: Date | null;

  public logoUrl: string | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public markdownExtensions: Array<'MathJax' | 'Prettify' | 'Balsamiq' | 'jTab'> | null;

  public name: string | null | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public openBetaDate: Date | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public relatedSites: RelatedSite[] | null;

  public siteState: 'normal' | 'closed_beta' | 'open_beta' | 'linked_meta' | null;

  public siteType: 'main_site' | 'meta_site' | null;

  public siteUrl: string | null;

  public styling: Styling | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public twitterAccount: string | null;

  public constructor (site?: TypeSite) {
    this.aliases = site?.aliases ?? null;
    this.apiSiteParameter = site?.api_site_parameter ?? null;
    this.audience = site?.audience ?? null;
    this.closedBetaDate = site?.closed_beta_date ?? null;
    this.faviconUrl = site?.favicon_url ?? null;
    this.highResolutionIconUrl = site?.high_resolution_icon_url ?? null;
    this.iconUrl = site?.icon_url ?? null;
    this.launchDate = site?.launch_date ?? null;
    this.logoUrl = site?.logo_url ?? null;
    this.markdownExtensions = site?.markdown_extensions ?? null;
    this.name = site?.name ?? null;
    this.openBetaDate = site?.open_beta_date ?? null;
    if (typeof site?.related_sites === 'undefined') {
      this.relatedSites = null;
    } else {
      this.relatedSites = site.related_sites
        .map((related_site) => new RelatedSite(related_site));
    }
    this.siteState = site?.site_state ?? null;
    this.siteType = site?.site_type ?? null;
    this.siteUrl = site?.site_url ?? null;
    if (typeof site?.styling === 'undefined') {
      this.styling = null;
    } else {
      this.styling = new Styling(site.styling);
    }
    this.twitterAccount = site?.twitter_account ?? null;
  }
}
