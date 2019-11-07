import {Site} from './Site';

import {TypeMigrationInfo} from '../result-types/TypeMigrationInfo';

/**
 * The equivalent of [Type migration_info](https://api.stackexchange.com/docs/types/migration-info).<br>
 * This object represents a [[Question]]'s migration to or from a different [[Site]] in the [Stack Exchange network](https://stackexchange.com/sites).
 */
export class MigrationInfo {

  public onDate: Date;

  public otherSite: Site;

  /**
   * Refers to a [[Question]]
   */
  public questionId: number;

  public constructor (migration_info: TypeMigrationInfo) {
    this.onDate = migration_info.on_date;
    this.otherSite = new Site(migration_info.other_site);
    this.questionId = migration_info.question_id;
  }
}
