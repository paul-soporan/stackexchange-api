import {TypeOriginalQuestion} from './TypeOriginalQuestion';
import {TypeShallowUser} from './TypeShallowUser';

export interface TypeClosedDetails {
  by_users?: TypeShallowUser[];
  description?: string;
  on_hold?: boolean;
  original_questions?: TypeOriginalQuestion[];
  reason?: string;
}
