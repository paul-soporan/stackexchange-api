import {TypeTag} from '../result-types/TypeTag';

export class Tag {

  public count: number;

  public hasSynonyms: boolean;

  public isModeratorOnly: boolean;

  public isRequired: boolean;

  public lastActivityDate?: Date;

  public name: string;

  public synonyms?: string[];

  public userId?: number;

  public constructor (tag: TypeTag) {
    this.count = tag.count;
    this.hasSynonyms = tag.has_synonyms;
    this.isModeratorOnly = tag.is_moderator_only;
    this.isRequired = tag.is_required;
    this.lastActivityDate = tag.last_activity_date ?? null;
    this.name = tag.name;
    this.synonyms = tag.synonyms ?? null;
    this.userId = tag.user_id ?? null;
  }
}
