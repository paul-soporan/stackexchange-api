import {GetBadgesOptions} from './GetBadgesOptions';

export interface GetBadgesByIdsOptions extends Omit<GetBadgesOptions, 'inName'> {
  ids: string[] | string;
}
