import {TypeShallowUser} from './TypeShallowUser';

export interface TypeBadge {
  readonly award_count?: number;
  readonly badge_id?: number;
  readonly badge_type?: 'named' | 'tag_based';
  readonly description?: string;
  readonly link?: string;
  readonly name?: string;
  readonly rank?: 'gold' | 'silver' | 'bronze';
  readonly user?: TypeShallowUser;
}
