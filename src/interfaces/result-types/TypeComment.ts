import {TypeShallowUser} from './TypeShallowUser';

export interface TypeComment {
  readonly body?: string;
  readonly body_markdown?: string;
  readonly can_flag?: boolean;
  readonly comment_id?: number;
  readonly creation_date?: Date;
  readonly edited?: boolean;
  readonly link?: string;
  readonly owner?: TypeShallowUser;
  readonly post_id?: number;
  readonly post_type?: 'question' | 'answer';
  readonly reply_to_user?: TypeShallowUser;
  readonly score?: number;
  readonly upvoted?: boolean;
}
