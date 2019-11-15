import {TypeOriginalQuestion} from './TypeOriginalQuestion';
import {TypeShallowUser} from './TypeShallowUser';

export interface TypeClosedDetails {
  readonly by_users?: TypeShallowUser[];
  readonly description?: string;
  readonly on_hold?: boolean;
  readonly original_questions?: TypeOriginalQuestion[];
  readonly reason?: string;
}
