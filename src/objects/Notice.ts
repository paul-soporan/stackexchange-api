import {TypeNotice} from '../result-types/TypeNotice';

/**
 * The equivalent of [Type notice](https://api.stackexchange.com/docs/types/notice).<br>
 * Represents a Notice on a [[Post]].
 */
export class Notice {

  public body: string;

  public creationDate: Date;

  public ownerUserId: number;

  public constructor (notice: TypeNotice) {
    this.body = notice.body ?? null;
    this.creationDate = notice.creation_date ?? null;
    this.ownerUserId = notice.owner_user_id ?? null;
  }
}
