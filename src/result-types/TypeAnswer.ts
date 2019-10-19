import {TypeComment} from './TypeComment';
import {TypeShallowUser} from './TypeShallowUser';

export interface TypeAnswer {
  accepted?: boolean;
  answer_id: number;
  awarded_bounty_amount?: number;
  awarded_bounty_users?: TypeShallowUser[];
  body?: string;
  body_markdown?: string;
  can_flag?: boolean;
  comment_count?: number;
  comments?: TypeComment[];
  community_owned_date?: Date;
  creation_date: Date;
  down_vote_count?: number;
  downvoted?: boolean;
  is_accepted: boolean;
  last_activity_date: Date;
  last_edit_date?: Date;
  last_editor?: TypeShallowUser;
  link?: string;
  locked_date?: Date;
  owner?: TypeShallowUser;
  question_id: number;
  score: number;
  share_link?: string;
  tags?: string[];
  title?: string;
  up_vote_count?: number;
  upvoted?: boolean;
}