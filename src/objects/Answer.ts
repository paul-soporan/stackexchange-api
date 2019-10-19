import {Comment} from './Comment';
import {ShallowUser} from './ShallowUser';

import {TypeAnswer} from '../result-types/TypeAnswer';

export class Answer {

  public accepted?: boolean;

  public answerId: number;

  public awardedBountyAmount?: number;

  public awardedBountyUsers?: ShallowUser[];

  public body?: string;

  public bodyMarkdown?: string;

  public canFlag?: boolean;

  public commentCount?: number;

  public comments?: Comment[];

  public communityOwnedDate?: Date;

  public creationDate: Date;

  public downVoteCount?: number;

  public downvoted?: boolean;

  public isAccepted: boolean;

  public lastActivityDate: Date;

  public lastEditDate?: Date;

  public lastEditor?: ShallowUser;

  public link?: string;

  public lockedDate?: Date;

  public owner?: ShallowUser;

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
    this.awardedBountyUsers = answer.awarded_bounty_users
      .map((shallow_user) => new ShallowUser(shallow_user)) ?? null;
    this.body = answer.body ?? null;
    this.bodyMarkdown = answer.body_markdown ?? null;
    this.canFlag = answer.can_flag ?? null;
    this.commentCount = answer.comment_count ?? null;
    this.comments = answer.comments
      .map((comment) => new Comment(comment)) ?? null;
    this.communityOwnedDate = answer.community_owned_date ?? null;
    this.creationDate = answer.creation_date;
    this.downVoteCount = answer.down_vote_count ?? null;
    this.downvoted = answer.downvoted ?? null;
    this.isAccepted = answer.is_accepted;
    this.lastActivityDate = answer.last_activity_date;
    this.lastEditDate = answer.last_edit_date ?? null;
    this.lastEditor = new ShallowUser(answer.last_editor) ?? null;
    this.link = answer.link ?? null;
    this.lockedDate = answer.locked_date ?? null;
    this.owner = new ShallowUser(answer.owner) ?? null;
    this.questionId = answer.question_id;
    this.score = answer.score;
    this.shareLink = answer.share_link ?? null;
    this.tags = answer.tags ?? null;
    this.title = answer.title ?? null;
    this.upVoteCount = answer.up_vote_count ?? null;
    this.upvoted = answer.upvoted ?? null;
  }
}
