import {GetBadgesOptions} from './GetBadgesOptions';

export interface GetBadgesByIdsOptions extends Omit<GetBadgesOptions, 'inName' | 'named'> {
  ids: string[] | string;
}
