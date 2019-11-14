import {Field} from '../../../types/Field';
import {FieldsOfType} from '../../../types/FieldsOfType';

export interface CreateFilterOptions {
  include?: Array<Field | FieldsOfType>;
  exclude?: Array<Field | FieldsOfType>;
  base?: string;
  unsafe?: boolean;
}
