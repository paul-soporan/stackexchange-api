import {TypeShallowUser} from './TypeShallowUser';

export interface TypeBadge {
  award_count: number;
  badge_id: number;
  badge_type: 'named' | 'tag_based';
  description?: string;
  link: string;
  name: string;
  rank: 'gold' | 'silver' | 'bronze';
  user?: TypeShallowUser;
}
