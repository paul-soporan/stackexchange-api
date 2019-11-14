import {Answer} from './Answer';
import {Badge} from './Badge';
import {Comment} from './Comment';
import {Filter} from './Filter';
import {Info} from './Info';
import {Privilege} from './Privilege';
import {Question} from './Question';
import {Site} from './Site';
import {Tag} from './Tag';

import {
  TypeAnswer,
  TypeBadge,
  TypeComment,
  TypeFilter,
  TypeInfo,
  TypePrivilege,
  TypeQuestion,
  TypeSite,
  TypeTag,
  TypeWrapper,
} from '../interfaces/result-types/ResultTypes';


type ClassType = 'Answer' | 'Badge' | 'Comment' | 'Filter' | 'Info' | 'Privilege' | 'Question' | 'Site' | 'Tag';

/**
 * The equivalent of the [Common Wrapper Object](https://api.stackexchange.com/docs/wrapper).<br>
 * All responses in the API share a common format, so as to make parsing these responses simpler.
 */
export class Wrapper<
  T extends
  | Answer
  | Badge
  | Comment
  | Filter
  | Info
  | Privilege
  | Question
  | Site
  | Tag
> {

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public backoff: number | null;

  /**
   * Refers to an [[Error]]<br>
   * *May be absent, in which case it is set to `null`*
   */
  public errorId: number | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public errorMessage: string | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public errorName: string | null;

  public hasMore: boolean | null;

  public items: T[] | null;

  public page: number | null;

  public pageSize: number | null;

  public quotaMax: number | null;

  public quotaRemaining: number | null;

  public total: number | null;

  public type: string | null;

  public constructor (wrapper?: TypeWrapper, classType?: ClassType) {
    this.backoff = wrapper?.backoff ?? null;
    this.errorId = wrapper?.error_id ?? null;
    this.errorMessage = wrapper?.error_message ?? null;
    this.errorName = wrapper?.error_name ?? null;
    this.hasMore = wrapper?.has_more ?? null;
    if (typeof wrapper?.items === 'undefined' || typeof classType === 'undefined') {
      this.items = null;
    } else {
      switch (classType) {
        case 'Answer':
          this.items
            = [...wrapper.items]
              .map((item) => new Answer(item as TypeAnswer)) as T[];
          break;
        case 'Badge':
          this.items
            = [...wrapper.items]
              .map((item) => new Badge(item as TypeBadge)) as T[];
          break;
        case 'Comment':
          this.items
            = [...wrapper.items]
              .map((item) => new Comment(item as TypeComment)) as T[];
          break;
        case 'Filter':
          this.items
            = [...wrapper.items]
              .map((item) => new Filter(item as TypeFilter)) as T[];
          break;
        case 'Info':
          this.items
            = [...wrapper.items]
              .map((item) => new Info(item as TypeInfo)) as T[];
          break;
        case 'Privilege':
          this.items
            = [...wrapper.items]
              .map((item) => new Privilege(item as TypePrivilege)) as T[];
          break;
        case 'Question':
          this.items
            = [...wrapper.items]
              .map((item) => new Question(item as TypeQuestion)) as T[];
          break;
        case 'Site':
          this.items
            = [...wrapper.items]
              .map((item) => new Site(item as TypeSite)) as T[];
          break;
        case 'Tag':
          this.items
            = [...wrapper.items]
              .map((item) => new Tag(item as TypeTag)) as T[];
          break;
        default:
          this.items = null;
      }
    }
    this.page = wrapper?.page ?? null;
    this.pageSize = wrapper?.page_size ?? null;
    this.quotaMax = wrapper?.quota_max ?? null;
    this.quotaRemaining = wrapper?.quota_remaining ?? null;
    this.total = wrapper?.total ?? null;
    this.type = wrapper?.type ?? null;
  }
}
