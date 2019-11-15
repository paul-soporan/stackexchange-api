import {FilterableRequest} from '../FilterableRequest';

export interface GetSitesOptions extends FilterableRequest {
  page?: number;
  pageSize?: number;
}
