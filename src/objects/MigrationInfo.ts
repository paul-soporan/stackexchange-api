import {Site} from './Site';

import {TypeMigrationInfo} from '../result-types/TypeMigrationInfo';

export class MigrationInfo {

  public onDate: Date;

  public otherSite: Site;

  public questionId: number;

  public constructor (migration_info: TypeMigrationInfo) {
    this.onDate = migration_info.on_date;
    this.otherSite = new Site(migration_info.other_site);
    this.questionId = migration_info.question_id;
  }
}
