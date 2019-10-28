import {TypePrivilege} from '../result-types/TypePrivilege';

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
