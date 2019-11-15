import {FilterableRequest} from '../FilterableRequest';

export interface AdvancedSearchOptions extends FilterableRequest {
  accepted?: boolean;
  answers?: number;
  body?: string;
  closed?: boolean;
  fromDate?: Date;
  max?: Date;
  migrated?: boolean;
  min?: Date;
  notice?: boolean;
  notTagged?: string[] | string;
  order?: 'desc' | 'asc';
  page?: number;
  pageSize?: number;
  q?: string;
  site: string;
  sort?: 'activity' | 'creation' | 'votes' | 'relevance';
  tagged?: string[] | string;
  title?: string;
  toDate?: Date;
  user?: number;
  url?: string;
  views?: number;
  wiki?: boolean;
}
