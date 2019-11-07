import {BadgeCount} from './BadgeCount';

import {TypeShallowUser} from '../result-types/TypeShallowUser';

/**
 * The equivalent of [Type shallow_user](https://api.stackexchange.com/docs/types/shallow-user).<br>
 * This object represents a [[User]], but omits many of the fields found on the full [[User]] object.<br>
 * This object is mostly analogous to the "user card" found on many pages (like the Question page) on a [Stack Exchange site](https://stackexchange.com/sites).
 */
export class ShallowUser {

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public acceptRate?: number;

  public badgeCounts?: BadgeCount;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public displayName?: string;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public link?: string;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public profileImage?: string;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public reputation?: number;

  /**
   * *May be absent, in which case it is set to `null`*
   */
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
