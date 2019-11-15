import {FilterableRequest} from '../FilterableRequest';

import {Field} from '../../../types/Field';
import {FieldsOfType} from '../../../types/FieldsOfType';

export interface CreateFilterOptions extends FilterableRequest {
  base?: string;
  exclude?: Array<Field | FieldsOfType>;
  include?: Array<Field | FieldsOfType>;
  unsafe?: boolean;
}
