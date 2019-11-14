import {Field} from '../../types/Field';

export interface TypeFilter {
  filter?: string;
  filter_type?: 'safe' | 'unsafe' | 'invalid';
  included_fields?: Field[];
}
