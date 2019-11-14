import {TypeTag} from '../interfaces/result-types/TypeTag';

/**
 * The equivalent of [Type tag](https://api.stackexchange.com/docs/types/tag).<br>
 * This object represents a Tag on a [Stack Exchange site](https://stackexchange.com/sites).<br>
 * Applications should be prepared for the destruction of Tags, though this tends to be a rare event.
 */
export class Tag {

  public count: number | null;

  public hasSynonyms: boolean | null;

  public isModeratorOnly: boolean | null;

  public isRequired: boolean | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public lastActivityDate: Date | null;

  public name: string | null;

  public synonyms: string[] | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public userId: number | null;

  public constructor (tag?: TypeTag) {
    this.count = tag?.count ?? null;
    this.hasSynonyms = tag?.has_synonyms ?? null;
    this.isModeratorOnly = tag?.is_moderator_only ?? null;
    this.isRequired = tag?.is_required ?? null;
    this.lastActivityDate = tag?.last_activity_date ?? null;
    this.name = tag?.name ?? null;
    this.synonyms = tag?.synonyms ?? null;
    this.userId = tag?.user_id ?? null;
  }
}
