import {TypeNotice} from '../result-types/TypeNotice';

export class Notice {

  public body: string;

  public creationDate: Date;

  public ownerUserId: number;

  public constructor (notice: TypeNotice) {
    this.body = notice.body;
    this.creationDate = notice.creation_date;
    this.ownerUserId = notice.owner_user_id;
  }
}
