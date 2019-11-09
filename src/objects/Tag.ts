import {TypeTag} from '../result-types/TypeTag';

/**
 * The equivalent of [Type tag](https://api.stackexchange.com/docs/types/tag).<br>
 * This object represents a Tag on a [Stack Exchange site](https://stackexchange.com/sites).<br>
 * Applications should be prepared for the destruction of Tags, though this tends to be a rare event.
 */
export class Tag {

  public count: number;

  public hasSynonyms: boolean;

  public isModeratorOnly: boolean;

  public isRequired: boolean;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public lastActivityDate: Date;

  public name: string;

  public synonyms: string[];

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public userId: number;

  public constructor (tag: TypeTag) {
    this.count = tag.count ?? null;
    this.hasSynonyms = tag.has_synonyms ?? null;
    this.isModeratorOnly = tag.is_moderator_only ?? null;
    this.isRequired = tag.is_required ?? null;
    this.lastActivityDate = tag.last_activity_date ?? null;
    this.name = tag.name ?? null;
    this.synonyms = tag.synonyms ?? null;
    this.userId = tag.user_id ?? null;
  }
}
