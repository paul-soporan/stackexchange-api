import {TypeComment} from './TypeComment';
import {TypeShallowUser} from './TypeShallowUser';

export interface TypeAnswer {
  readonly accepted?: boolean;
  readonly answer_id?: number;
  readonly awarded_bounty_amount?: number;
  readonly awarded_bounty_users?: TypeShallowUser[];
  readonly body?: string;
  readonly body_markdown?: string;
  readonly can_flag?: boolean;
  readonly comment_count?: number;
  readonly comments?: TypeComment[];
  readonly community_owned_date?: Date;
  readonly creation_date?: Date;
  readonly down_vote_count?: number;
  readonly downvoted?: boolean;
  readonly is_accepted?: boolean;
  readonly last_activity_date?: Date;
  readonly last_edit_date?: Date;
  readonly last_editor?: TypeShallowUser;
  readonly link?: string;
  readonly locked_date?: Date;
  readonly owner?: TypeShallowUser;
  readonly question_id?: number;
  readonly score?: number;
  readonly share_link?: string;
  readonly tags?: string[];
  readonly title?: string;
  readonly up_vote_count?: number;
  readonly upvoted?: boolean;
}
