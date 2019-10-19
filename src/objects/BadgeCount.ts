import {TypeBadgeCount} from '../result-types/TypeBadgeCount';

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
