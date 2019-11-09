import {TypeShallowUser} from './TypeShallowUser';

export interface TypeComment {
  body?: string;
  body_markdown?: string;
  can_flag?: boolean;
  comment_id?: number;
  creation_date?: Date;
  edited?: boolean;
  link?: string;
  owner?: TypeShallowUser;
  post_id?: number;
  post_type?: 'question' | 'answer';
  reply_to_user?: TypeShallowUser;
  score?: number;
  upvoted?: boolean;
}
