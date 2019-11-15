import {TypeComment} from './TypeComment';
import {TypeShallowUser} from './TypeShallowUser';

export interface TypePost {
  readonly body?: string;
  readonly body_markdown?: string;
  readonly comment_count?: number;
  readonly comments?: TypeComment[];
  readonly creation_date?: Date;
  readonly down_vote_count?: number;
  readonly downvoted?: boolean;
  readonly last_activity_date?: Date;
  readonly last_edit_date?: Date;
  readonly last_editor?: TypeShallowUser;
  readonly link?: string;
  readonly owner?: TypeShallowUser;
  readonly post_id?: number;
  readonly post_type?: 'question' | 'answer';
  readonly score?: number;
  readonly share_link?: string;
  readonly title?: string;
  readonly up_vote_count?: number;
  readonly upvoted?: boolean;
}
