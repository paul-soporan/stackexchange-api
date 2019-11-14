import {Comment} from './Comment';
import {ShallowUser} from './ShallowUser';

import {TypePost} from '../interfaces/result-types/TypePost';

/**
 * The equivalent of [Type post](https://api.stackexchange.com/docs/types/post).<br>
 * This object represents the intersection of the [[Question]] and [[Answer]] objects.<br>
 * It's used in cases where it would be beneficial to mix [[Question|Questions]] and [[Answer|Answers]] in a response.
 */
export class Post {

  public body: string;

  public bodyMarkdown: string;

  public commentCount: number;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public comments: Comment[];

  public creationDate: Date;

  public downVoteCount: number;

  public downvoted: boolean;

  public lastActivityDate: Date;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public lastEditDate: Date;

  public lastEditor: ShallowUser;

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

  public score: number;

  public shareLink: string;

  public title: string;

  public upVoteCount: number;

  public upvoted: boolean;

  public constructor (post?: TypePost) {
    this.body = post?.body ?? null;
    this.bodyMarkdown = post?.body_markdown ?? null;
    this.commentCount = post?.comment_count ?? null;
    if (typeof post?.comments === 'undefined') {
      this.comments = null;
    } else {
      this.comments = post.comments
        .map((comment) => new Comment(comment));
    }
    this.creationDate = post?.creation_date ?? null;
    this.downVoteCount = post?.down_vote_count ?? null;
    this.downvoted = post?.downvoted ?? null;
    this.lastActivityDate = post?.last_activity_date ?? null;
    this.lastEditDate = post?.last_edit_date ?? null;
    if (typeof post?.last_editor === 'undefined') {
      this.lastEditor = null;
    } else {
      this.lastEditor = new ShallowUser(post.last_editor);
    }
    this.link = post?.link ?? null;
    if (typeof post?.owner === 'undefined') {
      this.owner = null;
    } else {
      this.owner = new ShallowUser(post.owner);
    }
    this.postId = post?.post_id ?? null;
    this.postType = post?.post_type ?? null;
    this.score = post?.score ?? null;
    this.shareLink = post?.share_link ?? null;
    this.title = post?.title ?? null;
    this.upVoteCount = post?.up_vote_count ?? null;
    this.upvoted = post?.upvoted ?? null;
  }
}
