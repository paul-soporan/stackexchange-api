import {TypePrivilege} from '../result-types/TypePrivilege';

/**
 * The equivalent of [Type privilege](https://api.stackexchange.com/docs/types/privilege).<br>
 * Represents a Privilege a User may have on a [Stack Exchange site](https://stackexchange.com/sites).<br>
 * Applications should be aware of, and be able to deal with, the possibility of new Privileges being introduced and old ones being removed.
 */
export class Privilege {

  public description: string;

  public reputation: number;

  public shortDescription: string;

  public constructor (privilege: TypePrivilege) {
    this.description = privilege.description;
    this.reputation = privilege.reputation;
    this.shortDescription = privilege.short_description;
  }
}
