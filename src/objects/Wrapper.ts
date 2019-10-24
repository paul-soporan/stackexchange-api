import {Answer} from './Answer';
import {Comment} from './Comment';
import {Privilege} from './Privilege';
import {Question} from './Question';
import {Site} from './Site';

import {TypeAnswer} from '../result-types/TypeAnswer';
import {TypeComment} from '../result-types/TypeComment';
import {TypePrivilege} from '../result-types/TypePrivilege';
import {TypeQuestion} from '../result-types/TypeQuestion';
import {TypeSite} from '../result-types/TypeSite';

import {TypeWrapper} from '../result-types/TypeWrapper';


type ClassType = 'Answer' | 'Comment' | 'Privilege' | 'Question' | 'Site';

export class Wrapper {

  public backoff?: number;

  public errorId?: number;

  public errorMessage?: string;

  public errorName?: string;

  public hasMore: boolean;

  public items: Array<Answer | Comment | Privilege | Question | Site>;

  public page?: number;

  public pageSize?: number;

  public quotaMax: number;

  public quotaRemaining: number;

  public total?: number;

  public type?: string;

  public constructor (wrapper: TypeWrapper, classType: ClassType) {
    this.backoff = wrapper.backoff ?? null;
    this.errorId = wrapper.error_id ?? null;
    this.errorMessage = wrapper.error_message ?? null;
    this.errorName = wrapper.error_name ?? null;
    this.hasMore = wrapper.has_more;
    switch (classType) {
      case 'Answer':
        this.items
          = wrapper.items.map((item) => new Answer(item as TypeAnswer));
        break;
      case 'Comment':
        this.items
          = wrapper.items.map((item) => new Comment(item as TypeComment));
        break;
      case 'Privilege':
        this.items
          = wrapper.items.map((item) => new Privilege(item as TypePrivilege));
        break;
      case 'Question':
        this.items
          = wrapper.items.map((item) => new Question(item as TypeQuestion));
        break;
      case 'Site':
        this.items
          = wrapper.items.map((item) => new Site(item as TypeSite));
        break;
      default:
        this.items = null;
    }
    this.page = wrapper.page ?? null;
    this.pageSize = wrapper.page_size ?? null;
    this.quotaMax = wrapper.quota_max;
    this.quotaRemaining = wrapper.quota_remaining;
    this.total = wrapper.total ?? null;
    this.type = wrapper.type ?? null;
  }
}
