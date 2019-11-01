import {GetRecipientsBadgesOptions} from './GetRecipientsBadgesOptions';

export interface GetRecipientsBadgesByIdsOptions extends GetRecipientsBadgesOptions {
  ids: string[] | string;
}
