import {TypeBadgeCount} from '../result-types/TypeBadgeCount';

/**
 * The equivalent of [Type badge_count](https://api.stackexchange.com/docs/types/badge-count).<br>
 * This object represents the total [[Badge|Badges]], segregated by rank, a user has earned.
 */
export class BadgeCount {

  public bronze: number;

  public gold: number;

  public silver: number;

  public constructor (badge_count: TypeBadgeCount) {
    this.bronze = badge_count.bronze;
    this.gold = badge_count.gold;
    this.silver = badge_count.silver;
  }
}
