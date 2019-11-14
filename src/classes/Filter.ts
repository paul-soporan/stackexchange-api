import {Field} from '../types/Field';

import {TypeFilter} from '../interfaces/result-types/TypeFilter';

export class Filter {

  public filter: string;

  public filterType: 'safe' | 'unsafe' | 'invalid';

  public includedFields: Field[];

  public constructor (filter?: TypeFilter) {
    this.filter = filter?.filter ?? null;
    this.filterType = filter?.filter_type ?? null;
    this.includedFields = filter?.included_fields ?? null;
  }
}
