import {Site} from './Site';

import {TypeMigrationInfo} from '../interfaces/result-types/TypeMigrationInfo';

/**
 * The equivalent of [Type migration_info](https://api.stackexchange.com/docs/types/migration-info).<br>
 * This object represents a [[Question]]'s migration to or from a different [[Site]] in the [Stack Exchange network](https://stackexchange.com/sites).
 */
export class MigrationInfo {

  public onDate: Date | null;

  public otherSite: Site | null;

  /**
   * Refers to a [[Question]]
   */
  public questionId: number | null;

  public constructor (migration_info?: TypeMigrationInfo) {
    this.onDate = migration_info?.on_date ?? null;
    if (typeof migration_info?.other_site === 'undefined') {
      this.otherSite = null;
    } else {
      this.otherSite = new Site(migration_info.other_site);
    }
    this.questionId = migration_info?.question_id ?? null;
  }
}
