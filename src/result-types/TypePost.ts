import {TypeComment} from './TypeComment';
import {TypeShallowUser} from './TypeShallowUser';

export interface TypePost {
  body?: string;
  body_markdown?: string;
  comment_count?: number;
  comments?: TypeComment[];
  creation_date?: Date;
  down_vote_count?: number;
  downvoted?: boolean;
  last_activity_date?: Date;
  last_edit_date?: Date;
  last_editor?: TypeShallowUser;
  link?: string;
  owner?: TypeShallowUser;
  post_id?: number;
  post_type?: 'question' | 'answer';
  score?: number;
  share_link?: string;
  title?: string;
  up_vote_count?: number;
  upvoted?: boolean;
}
