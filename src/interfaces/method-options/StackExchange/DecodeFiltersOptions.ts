import {FilterableRequest} from '../FilterableRequest';

export interface DecodeFiltersOptions extends FilterableRequest {
  filters: string[] | string;
}
