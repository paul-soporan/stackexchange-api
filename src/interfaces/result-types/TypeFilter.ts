import {Field} from '../../types/Field';

export interface TypeFilter {
  readonly filter?: string;
  readonly filter_type?: 'safe' | 'unsafe' | 'invalid';
  readonly included_fields?: Field[];
}
