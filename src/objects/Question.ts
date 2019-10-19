import {Answer} from './Answer';
import {ClosedDetails} from './ClosedDetails';
import {Comment} from './Comment';
import {MigrationInfo} from './MigrationInfo';
import {Notice} from './Notice';
import {ShallowUser} from './ShallowUser';

import {TypeQuestion} from '../result-types/TypeQuestion';

export class Question {

  public acceptedAnswerId?: number;

  public answerCount: number;

  public answers?: Answer[];

  public body?: string;

  public bodyMarkdown?: string;

  public bountyAmount?: number;

  public bountyClosesDate?: Date;

  public bountyUser?: ShallowUser;

  public canClose?: boolean;

  public canFlag?: boolean;

  public closeVoteCount?: number;

  public closedDate?: Date;

  public closedDetails?: ClosedDetails;

  public closedReason?: string;

  public commentCount?: number;

  public comments?: Comment[];

  public communityOwnedDate?: Date;

  public creationDate: Date;

  public deleteVoteCount?: number;

  public downVoteCount?: number;

  public downvoted?: boolean;

  public favoriteCount?: number;

  public favorited?: boolean;

  public isAnswered: boolean;

  public lastActivityDate: Date;

  public lastEditDate?: Date;

  public lastEditor?: ShallowUser;

  public link: string;

  public lockedDate?: Date;

  public migratedFrom?: MigrationInfo;

  public migratedTo?: MigrationInfo;

  public notice?: Notice;

  public owner?: ShallowUser;

  public protectedDate?: Date;

  public questionId: number;

  public reopenVoteCount?: number;

  public score: number;

  public shareLink?: string;

  public tags: string[];

  public title: string;

  public upVoteCount?: number;

  public upvoted?: boolean;

  public viewCount: number;

  public constructor (question: TypeQuestion) {
    this.acceptedAnswerId = question.accepted_answer_id ?? null;
    this.answerCount = question.answer_count;
    if (typeof question.answers === 'undefined') {
      this.answers = null;
    } else {
      this.answers = question.answers
        .map((answer): Answer => new Answer(answer));
    }
    this.body = question.body ?? null;
    this.bodyMarkdown = question.body_markdown ?? null;
    this.bountyAmount = question.bounty_amount ?? null;
    this.bountyClosesDate = question.bounty_closes_date ?? null;
    if (typeof question.bounty_user === 'undefined') {
      this.bountyUser = null;
    } else {
      this.bountyUser = new ShallowUser(question.bounty_user);
    }
    this.canClose = question.can_close ?? null;
    this.canFlag = question.can_flag ?? null;
    this.closeVoteCount = question.close_vote_count ?? null;
    this.closedDate = question.closed_date ?? null;
    if (typeof question.closed_details === 'undefined') {
      this.closedDetails = null;
    } else {
      this.closedDetails = new ClosedDetails(question.closed_details);
    }
    this.closedReason = question.closed_reason ?? null;
    this.commentCount = question.comment_count ?? null;
    if (typeof question?.comments === 'undefined') {
      this.comments = null;
    } else {
      this.comments = question.comments
        .map((comment): Comment => new Comment(comment));
    }
    this.communityOwnedDate = question.community_owned_date ?? null;
    this.creationDate = question.creation_date;
    this.deleteVoteCount = question.delete_vote_count ?? null;
    this.downVoteCount = question.down_vote_count ?? null;
    this.downvoted = question.downvoted ?? null;
    this.favoriteCount = question.favorite_count ?? null;
    this.favorited = question.favorited ?? null;
    this.isAnswered = question.is_answered;
    this.lastActivityDate = question.last_activity_date;
    this.lastEditDate = question.last_edit_date ?? null;
    if (typeof question.last_editor === 'undefined') {
      this.lastEditor = null;
    } else {
      this.lastEditor = new ShallowUser(question.last_editor);
    }
    this.link = question.link;
    this.lockedDate = question.locked_date ?? null;
    if (typeof question.migrated_from === 'undefined') {
      this.migratedFrom = null;
    } else {
      this.migratedFrom = new MigrationInfo(question.migrated_from);
    }
    if (typeof question.migrated_to === 'undefined') {
      this.migratedTo = null;
    } else {
      this.migratedTo = new MigrationInfo(question.migrated_to);
    }
    if (typeof question.notice === 'undefined') {
      this.notice = null;
    } else {
      this.notice = new Notice(question.notice);
    }
    if (typeof question.owner === 'undefined') {
      this.owner = null;
    } else {
      this.owner = new ShallowUser(question.owner);
    }
    this.protectedDate = question.protected_date ?? null;
    this.questionId = question.question_id;
    this.reopenVoteCount = question.reopen_vote_count ?? null;
    this.score = question.score;
    this.shareLink = question.share_link ?? null;
    this.tags = question.tags;
    this.title = question.title;
    this.upVoteCount = question.up_vote_count ?? null;
    this.upvoted = question.upvoted ?? null;
    this.viewCount = question.view_count;
  }
}
