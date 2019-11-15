import {TypeBadgeCount} from './TypeBadgeCount';

export interface TypeShallowUser {
  readonly accept_rate?: number;
  readonly badge_counts?: TypeBadgeCount;
  readonly display_name?: string;
  readonly link?: string;
  readonly profile_image?: string;
  readonly reputation?: number;
  readonly user_id?: number;
  readonly user_type?: 'unregistered' | 'registered' | 'moderator' | 'team_admin' | 'does_not_exist';
}
