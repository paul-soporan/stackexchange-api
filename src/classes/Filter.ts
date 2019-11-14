import {Field} from '../types/Field';

import {TypeFilter} from '../interfaces/result-types/TypeFilter';

export class Filter {

  public filter: string | null;

  public filterType: 'safe' | 'unsafe' | 'invalid' | null;

  public includedFields: Field[] | null;

  public constructor (filter?: TypeFilter) {
    this.filter = filter?.filter ?? null;
    this.filterType = filter?.filter_type ?? null;
    this.includedFields = filter?.included_fields ?? null;
  }
}
