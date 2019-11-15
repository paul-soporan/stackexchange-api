import {FilterableRequest} from '../FilterableRequest';

export interface GetRecipientsBadgesOptions extends FilterableRequest {
  fromDate?: Date;
  page?: number;
  pageSize?: number;
  site: string;
  toDate?: Date;
}
