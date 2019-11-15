import {TypeAnswer} from './TypeAnswer';
import {TypeBadge} from './TypeBadge';
import {TypeComment} from './TypeComment';
import {TypeFilter} from './TypeFilter';
import {TypeInfo} from './TypeInfo';
import {TypePrivilege} from './TypePrivilege';
import {TypeQuestion} from './TypeQuestion';
import {TypeSite} from './TypeSite';
import {TypeTag} from './TypeTag';

export interface TypeWrapper {
  readonly backoff?: number;
  readonly error_id?: number;
  readonly error_message?: string;
  readonly error_name?: string;
  readonly has_more?: boolean;
  readonly items?:
    | TypeAnswer[]
    | TypeBadge[]
    | TypeComment[]
    | TypeFilter[]
    | TypeInfo[]
    | TypePrivilege[]
    | TypeQuestion[]
    | TypeSite[]
    | TypeTag[];
  readonly page?: number;
  readonly page_size?: number;
  readonly quota_max?: number;
  readonly quota_remaining?: number;
  readonly total?: number;
  readonly type?: string;
}
