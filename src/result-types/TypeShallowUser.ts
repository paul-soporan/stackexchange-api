import {TypeBadgeCount} from './TypeBadgeCount';

export interface TypeShallowUser {
  accept_rate?: number;
  badge_counts?: TypeBadgeCount;
  display_name?: string;
  link?: string;
  profile_image?: string;
  reputation?: number;
  user_id?: number;
  user_type?: 'unregistered' | 'registered' | 'moderator' | 'team_admin' | 'does_not_exist';
}
