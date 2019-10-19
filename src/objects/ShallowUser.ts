import {BadgeCount} from './BadgeCount';

import {TypeShallowUser} from '../result-types/TypeShallowUser';

export class ShallowUser {

  public acceptRate?: number;

  public badgeCounts?: BadgeCount;

  public displayName?: string;

  public link?: string;

  public profileImage?: string;

  public reputation?: number;

  public userId?: number;

  public userType: 'unregistered' | 'registered' | 'moderator' | 'team_admin' | 'does_not_exist';

  public constructor (shallow_user: TypeShallowUser) {
    this.acceptRate = shallow_user.accept_rate ?? null;
    this.badgeCounts = shallow_user.badge_counts ?? null;
    this.displayName = shallow_user.display_name ?? null;
    this.link = shallow_user.link ?? null;
    this.profileImage = shallow_user.profile_image ?? null;
    this.reputation = shallow_user.reputation ?? null;
    this.userId = shallow_user.user_id ?? null;
    this.userType = shallow_user.user_type ?? null;
  }
}
