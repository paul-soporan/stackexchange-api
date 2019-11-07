import {Answer} from './Answer';
import {Badge} from './Badge';
import {Comment} from './Comment';
import {Info} from './Info';
import {Privilege} from './Privilege';
import {Question} from './Question';
import {Site} from './Site';
import {Tag} from './Tag';

import {TypeAnswer} from '../result-types/TypeAnswer';
import {TypeBadge} from '../result-types/TypeBadge';
import {TypeComment} from '../result-types/TypeComment';
import {TypeInfo} from '../result-types/TypeInfo';
import {TypePrivilege} from '../result-types/TypePrivilege';
import {TypeQuestion} from '../result-types/TypeQuestion';
import {TypeSite} from '../result-types/TypeSite';
import {TypeTag} from '../result-types/TypeTag';

import {TypeWrapper} from '../result-types/TypeWrapper';


type ClassType = 'Answer' | 'Badge' | 'Comment' | 'Info' | 'Privilege' | 'Question' | 'Site' | 'Tag';

/**
 * The equivalent of the [Common Wrapper Object](https://api.stackexchange.com/docs/wrapper).<br>
 * All responses in the API share a common format, so as to make parsing these responses simpler.
 */
export class Wrapper<
  T extends Answer | Badge | Comment | Info | Privilege | Question | Site | Tag
> {

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public backoff?: number;

  /**
   * Refers to an [[Error]]<br>
   * *May be absent, in which case it is set to `null`*
   */
  public errorId?: number;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public errorMessage?: string;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public errorName?: string;

  public hasMore: boolean;

  public items: T[];

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
            .map((item: TypeAnswer) => new Answer(item)) as T[];
        break;
      case 'Badge':
        this.items
          = [...wrapper.items]
            .map((item: TypeBadge) => new Badge(item)) as T[];
        break;
      case 'Comment':
        this.items
          = [...wrapper.items]
            .map((item: TypeComment) => new Comment(item)) as T[];
        break;
      case 'Info':
        this.items
          = [...wrapper.items]
            .map((item: TypeInfo) => new Info(item)) as T[];
        break;
      case 'Privilege':
        this.items
          = [...wrapper.items]
            .map((item: TypePrivilege) => new Privilege(item)) as T[];
        break;
      case 'Question':
        this.items
          = [...wrapper.items]
            .map((item: TypeQuestion) => new Question(item)) as T[];
        break;
      case 'Site':
        this.items
          = [...wrapper.items]
            .map((item: TypeSite) => new Site(item)) as T[];
        break;
      case 'Tag':
        this.items
          = [...wrapper.items]
            .map((item: TypeTag) => new Tag(item)) as T[];
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
