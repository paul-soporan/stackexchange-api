import {TypeRelatedSite} from './TypeRelatedSite';
import {TypeStyling} from './TypeStyling';

export interface TypeSite {
  aliases?: string[];
  api_site_parameter: string;
  audience: string;
  closed_beta_date?: Date;
  favicon_url: string;
  high_resolution_icon_url?: string;
  icon_url: string;
  launch_date: Date;
  logo_url: string;
  markdown_extensions?: Array<'MathJax' | 'Prettify' | 'Balsamiq' | 'jTab'>;
  name: string;
  open_beta_date?: Date;
  related_sites?: TypeRelatedSite[];
  site_state: 'normal' | 'closed_beta' | 'open_beta' | 'linked_meta';
  site_type: 'main_site' | 'meta_site';
  site_url: string;
  styling: TypeStyling;
  twitter_account?: string;
}