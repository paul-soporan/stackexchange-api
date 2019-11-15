import {
  TypeAnswer,
  TypeBadge,
  TypeComment,
  TypeFilter,
  TypeInfo,
  TypePost,
  TypePrivilege,
  TypeQuestion,
  TypeSite,
  TypeTag,
} from './ResultTypes';

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
    | TypePost[]
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
