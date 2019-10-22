import {TypeQuestion} from './TypeQuestion';
import {TypeSite} from './TypeSite';

export interface TypeWrapper {
  backoff?: number;
  error_id?: number;
  error_message?: string;
  error_name?: string;
  has_more: boolean;
  items: Array<TypeQuestion | TypeSite>;
  page?: number;
  page_size?: number;
  quota_max: number;
  quota_remaining: number;
  total?: number;
  type?: string;
}
