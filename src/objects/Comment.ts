import {ShallowUser} from './ShallowUser';

import {TypeComment} from '../result-types/TypeComment';

/**
 * The equivalent of [Type comment](https://api.stackexchange.com/docs/types/comment).<br>
 * All [[Question|Questions]] and [[Answer|Answers]] on a [Stack Exchange site](https://stackexchange.com/sites) can be commented on, and this object represents those Comments.<br>
 * Comments can also be optionally directed at users, when this is the case the [[replyToUser]] property is set.
 */
export class Comment {

  public body: string;

  public bodyMarkdown: string;

  public canFlag: boolean;

  /**
   * Refers to a [[Comment]]
   */
  public commentId: number;

  public creationDate: Date;

  public edited: boolean;

  public link: string;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public owner: ShallowUser;

  /**
   * Refers to a [[Post]]
   */
  public postId: number;

  public postType: 'question' | 'answer';

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public replyToUser: ShallowUser;

  public score: number;

  public upvoted: boolean;

  public constructor (comment: TypeComment) {
    this.body = comment.body ?? null;
    this.bodyMarkdown = comment.body_markdown ?? null;
    this.canFlag = comment.can_flag ?? null;
    this.commentId = comment.comment_id ?? null;
    this.creationDate = comment.creation_date ?? null;
    this.edited = comment.edited ?? null;
    this.link = comment.link ?? null;
    if (typeof comment.owner === 'undefined') {
      this.owner = null;
    } else {
      this.owner = new ShallowUser(comment.owner);
    }
    this.postId = comment.post_id ?? null;
    this.postType = comment.post_type ?? null;
    if (typeof comment.reply_to_user === 'undefined') {
      this.replyToUser = null;
    } else {
      this.replyToUser = new ShallowUser(comment.reply_to_user);
    }
    this.score = comment.score ?? null;
    this.upvoted = comment.upvoted ?? null;
  }
}
