import {TypeNotice} from '../interfaces/result-types/TypeNotice';

/**
 * The equivalent of [Type notice](https://api.stackexchange.com/docs/types/notice).<br>
 * Represents a Notice on a [[Post]].
 */
export class Notice {

  public body: string | null;

  public creationDate: Date | null;

  public ownerUserId: number | null;

  public constructor (notice?: TypeNotice) {
    this.body = notice?.body ?? null;
    this.creationDate = notice?.creation_date ?? null;
    this.ownerUserId = notice?.owner_user_id ?? null;
  }
}
