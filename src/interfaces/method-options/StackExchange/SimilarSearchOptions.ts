import {FilterableRequest} from '../FilterableRequest';

export interface SimilarSearchOptions extends FilterableRequest {
  fromDate?: Date;
  max?: Date;
  min?: Date;
  notTagged?: string[] | string;
  order?: 'desc' | 'asc';
  page?: number;
  pageSize?: number;
  site: string;
  sort?: 'activity' | 'creation' | 'votes' | 'relevance';
  tagged?: string[] | string;
  title: string;
  toDate?: Date;
}
