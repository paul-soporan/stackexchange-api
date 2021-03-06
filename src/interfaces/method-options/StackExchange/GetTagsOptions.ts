import {FilterableRequest} from '../FilterableRequest';

export interface GetTagsOptions extends FilterableRequest {
  fromDate?: Date;
  inName?: string;
  max?: number;
  min?: number;
  moderatorOnly?: boolean;
  order?: 'desc' | 'asc';
  page?: number;
  pageSize?: number;
  required?: boolean;
  site: string;
  sort?: 'popular' | 'activity' | 'name';
  toDate?: Date;
}
