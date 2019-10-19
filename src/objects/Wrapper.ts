import {TypeWrapper} from '../result-types/TypeWrapper';

export class Wrapper<T> {

  public backoff?: number;

  public errorId?: number;

  public errorMessage?: string;

  public errorName?: string;

  public hasMore: boolean;

  public items: Array<T>;

  public page?: number;

  public pageSize?: number;

  public quotaMax: number;

  public quotaRemaining: number;

  public total?: number;

  public type?: string;

  public constructor (wrapper: TypeWrapper) {
    this.backoff = wrapper.backoff ?? null;
    this.errorId = wrapper.error_id ?? null;
    this.errorMessage = wrapper.error_message ?? null;
    this.errorName = wrapper.error_name ?? null;
    this.hasMore = wrapper.has_more;
    this.items = wrapper.items;
    this.page = wrapper.page ?? null;
    this.pageSize = wrapper.page_size ?? null;
    this.quotaMax = wrapper.quota_max;
    this.quotaRemaining = wrapper.quota_remaining;
    this.total = wrapper.total ?? null;
    this.type = wrapper.type ?? null;
  }
}
