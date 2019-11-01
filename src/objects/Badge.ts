import {ShallowUser} from './ShallowUser';

import {TypeBadge} from '../result-types/TypeBadge';

export class Badge {

  public awardCount: number;

  public badgeId: number;

  public badgeType: 'named' | 'tag_based';

  public description?: string;

  public link: string;

  public name: string;

  public rank: 'gold' | 'silver' | 'bronze';

  public user?: ShallowUser;

  public constructor (badge: TypeBadge) {
    this.awardCount = badge.award_count;
    this.badgeId = badge.badge_id;
    this.badgeType = badge.badge_type;
    this.description = badge.description ?? null;
    this.link = badge.link;
    this.name = badge.name;
    this.rank = badge.rank;
    if (typeof badge.user === 'undefined') {
      this.user = null;
    } else {
      this.user = new ShallowUser(badge.user);
    }
  }
}
