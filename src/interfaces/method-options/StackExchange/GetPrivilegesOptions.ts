import {FilterableRequest} from '../FilterableRequest';

export interface GetPrivilegesOptions extends FilterableRequest {
  page?: number;
  pageSize?: number;
  site: string;
}
