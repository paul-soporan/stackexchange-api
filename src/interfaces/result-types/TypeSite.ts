import {TypeRelatedSite} from './TypeRelatedSite';
import {TypeStyling} from './TypeStyling';

export interface TypeSite {
  readonly aliases?: string[];
  readonly api_site_parameter?: string;
  readonly audience?: string;
  readonly closed_beta_date?: Date;
  readonly favicon_url?: string;
  readonly high_resolution_icon_url?: string;
  readonly icon_url?: string;
  readonly launch_date?: Date;
  readonly logo_url?: string;
  readonly markdown_extensions?: Array<'MathJax' | 'Prettify' | 'Balsamiq' | 'jTab'>;
  readonly name?: string;
  readonly open_beta_date?: Date;
  readonly related_sites?: TypeRelatedSite[];
  readonly site_state?: 'normal' | 'closed_beta' | 'open_beta' | 'linked_meta';
  readonly site_type?: 'main_site' | 'meta_site';
  readonly site_url?: string;
  readonly styling?: TypeStyling;
  readonly twitter_account?: string;
}
