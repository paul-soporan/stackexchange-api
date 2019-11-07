import {Comment} from './Comment';
import {ShallowUser} from './ShallowUser';

import {TypeAnswer} from '../result-types/TypeAnswer';

/**
 * The equivalent of [Type answer](https://api.stackexchange.com/docs/types/answer).<br>
 * This object represents an Answer to a [[Question]] on one of the [Stack Exchange sites](https://stackexchange.com/sites).<br>
 * As on the [[Question]] page, it is possible to fetch the [[Comment|Comments]] on an Answer as part of a call; though this is not done by default.
 */
export class Answer {

  public accepted?: boolean;

  /**
   * Refers to an [[Answer]]
   */
  public answerId: number;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public awardedBountyAmount?: number;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public awardedBountyUsers?: ShallowUser[];

  public body?: string;

  public bodyMarkdown?: string;

  public canFlag?: boolean;

  public commentCount?: number;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public comments?: Comment[];

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public communityOwnedDate?: Date;

  public creationDate: Date;

  public downVoteCount?: number;

  public downvoted?: boolean;

  public isAccepted: boolean;

  public lastActivityDate: Date;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public lastEditDate?: Date;

  public lastEditor?: ShallowUser;

  public link?: string;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public lockedDate?: Date;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public owner?: ShallowUser;

  /**
   * Refers to a [[Question]]
   */
  public questionId: number;

  public score: number;

  public shareLink?: string;

  public tags?: string[];

  public title?: string;

  public upVoteCount?: number;

  public upvoted?: boolean;

  public constructor (answer: TypeAnswer) {
    this.accepted = answer.accepted ?? null;
    this.answerId = answer.answer_id;
    this.awardedBountyAmount = answer.awarded_bounty_amount ?? null;
    if (typeof answer.awarded_bounty_users === 'undefined') {
      this.awardedBountyUsers = null;
    } else {
      this.awardedBountyUsers = answer.awarded_bounty_users
        .map((shallow_user) => new ShallowUser(shallow_user));
    }
    this.body = answer.body ?? null;
    this.bodyMarkdown = answer.body_markdown ?? null;
    this.canFlag = answer.can_flag ?? null;
    this.commentCount = answer.comment_count ?? null;
    if (typeof answer.comments === 'undefined') {
      this.comments = null;
    } else {
      this.comments = answer.comments
        .map((comment) => new Comment(comment));
    }
    this.communityOwnedDate = answer.community_owned_date ?? null;
    this.creationDate = answer.creation_date;
    this.downVoteCount = answer.down_vote_count ?? null;
    this.downvoted = answer.downvoted ?? null;
    this.isAccepted = answer.is_accepted;
    this.lastActivityDate = answer.last_activity_date;
    this.lastEditDate = answer.last_edit_date ?? null;
    if (typeof answer.last_editor === 'undefined') {
      this.lastEditor = null;
    } else {
      this.lastEditor = new ShallowUser(answer.last_editor);
    }
    this.link = answer.link ?? null;
    this.lockedDate = answer.locked_date ?? null;
    if (typeof answer.owner === 'undefined') {
      this.owner = null;
    } else {
      this.owner = new ShallowUser(answer.owner);
    }
    this.questionId = answer.question_id;
    this.score = answer.score;
    this.shareLink = answer.share_link ?? null;
    this.tags = answer.tags ?? null;
    this.title = answer.title ?? null;
    this.upVoteCount = answer.up_vote_count ?? null;
    this.upvoted = answer.upvoted ?? null;
  }
}
