import {ShallowUser} from './ShallowUser';

import {TypeBadge} from '../interfaces/result-types/TypeBadge';

/**
 * The equivalent of [Type badge](https://api.stackexchange.com/docs/types/badge).<br>
 * This object represents a Badge on a [Stack Exchange site](https://stackexchange.com/sites).<br>
 * Some Badges, like "Autobiographer", are held in common across all Stack Exchange sites. Others, like most tag badges, vary on a site by site basis.<br>
 * Remember that ids are never guaranteed to be the same between sites, even if a Badge exists on both sites.
 */
export class Badge {

  public awardCount: number;

  /**
   * Refers to a [[Badge]]
   */
  public badgeId: number;

  public badgeType: 'named' | 'tag_based';

  public description: string;

  public link: string;

  public name: string;

  public rank: 'gold' | 'silver' | 'bronze';

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public user: ShallowUser;

  public constructor (badge?: TypeBadge) {
    this.awardCount = badge?.award_count ?? null;
    this.badgeId = badge?.badge_id ?? null;
    this.badgeType = badge?.badge_type ?? null;
    this.description = badge?.description ?? null;
    this.link = badge?.link ?? null;
    this.name = badge?.name ?? null;
    this.rank = badge?.rank ?? null;
    if (typeof badge?.user === 'undefined') {
      this.user = null;
    } else {
      this.user = new ShallowUser(badge.user);
    }
  }
}
