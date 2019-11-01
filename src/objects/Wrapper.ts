import {Answer} from './Answer';
import {Badge} from './Badge';
import {Comment} from './Comment';
import {Privilege} from './Privilege';
import {Question} from './Question';
import {Site} from './Site';
import {Tag} from './Tag';

import {TypeAnswer} from '../result-types/TypeAnswer';
import {TypeBadge} from '../result-types/TypeBadge';
import {TypeComment} from '../result-types/TypeComment';
import {TypePrivilege} from '../result-types/TypePrivilege';
import {TypeQuestion} from '../result-types/TypeQuestion';
import {TypeSite} from '../result-types/TypeSite';
import {TypeTag} from '../result-types/TypeTag';

import {TypeWrapper} from '../result-types/TypeWrapper';


type ClassType = 'Answer' | 'Badge' | 'Comment' | 'Privilege' | 'Question' | 'Site' | 'Tag';

export class Wrapper {

  public backoff?: number;

  public errorId?: number;

  public errorMessage?: string;

  public errorName?: string;

  public hasMore: boolean;

  public items:
    | Answer[]
    | Badge[]
    | Comment[]
    | Privilege[]
    | Question[]
    | Site[]
    | Tag[];

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
          = [...wrapper.items]
            .map((item: TypeAnswer) => new Answer(item));
        break;
      case 'Badge':
        this.items
          = [...wrapper.items]
            .map((item: TypeBadge) => new Badge(item));
        break;
      case 'Comment':
        this.items
          = [...wrapper.items]
            .map((item: TypeComment) => new Comment(item));
        break;
      case 'Privilege':
        this.items
          = [...wrapper.items]
            .map((item: TypePrivilege) => new Privilege(item));
        break;
      case 'Question':
        this.items
          = [...wrapper.items]
            .map((item: TypeQuestion) => new Question(item));
        break;
      case 'Site':
        this.items
          = [...wrapper.items]
            .map((item: TypeSite) => new Site(item));
        break;
      case 'Tag':
        this.items
          = [...wrapper.items]
            .map((item: TypeTag) => new Tag(item));
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
