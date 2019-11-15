import {TypeSite} from './TypeSite';

export interface TypeMigrationInfo {
  readonly on_date?: Date;
  readonly other_site?: TypeSite;
  readonly question_id?: number;
}
