export interface TypeRelatedSite {
  readonly api_site_parameter?: string;
  readonly name?: string;
  readonly relation?: 'parent' | 'meta' | 'chat';
  readonly site_url?: string;
}
