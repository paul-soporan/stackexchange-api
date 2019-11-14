import {Answer} from './Answer';
import {ClosedDetails} from './ClosedDetails';
import {Comment} from './Comment';
import {MigrationInfo} from './MigrationInfo';
import {Notice} from './Notice';
import {ShallowUser} from './ShallowUser';

import {TypeQuestion} from '../interfaces/result-types/TypeQuestion';

/**
 * The equivalent of [Type question](https://api.stackexchange.com/docs/types/question).<br>
 * This object represents a Question on one of the [Stack Exchange sites](https://stackexchange.com/sites).<br>
 * This object is heavily inspired by the Question page itself, and can optionally return [[Comment|Comments]] and [[Answer|Answers]] accordingly.
 */
export class Question {

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public acceptedAnswerId: number | null;

  public answerCount: number | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public answers: Answer[] | null;

  public body: string | null;

  public bodyMarkdown: string | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public bountyAmount: number | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public bountyClosesDate: Date | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public bountyUser: ShallowUser | null;

  public canClose: boolean | null;

  public canFlag: boolean | null;

  public closeVoteCount: number | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public closedDate: Date | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public closedDetails: ClosedDetails | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public closedReason: string | null;

  public commentCount: number | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public comments: Comment[] | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public communityOwnedDate: Date | null;

  public creationDate: Date | null;

  public deleteVoteCount: number | null;

  public downVoteCount: number | null;

  public downvoted: boolean | null;

  public favoriteCount: number | null;

  public favorited: boolean | null;

  public isAnswered: boolean | null;

  public lastActivityDate: Date | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public lastEditDate: Date | null;

  public lastEditor: ShallowUser | null;

  public link: string | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public lockedDate: Date | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public migratedFrom: MigrationInfo | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public migratedTo: MigrationInfo | null;

  public notice: Notice | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public owner: ShallowUser | null;

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public protectedDate: Date | null;

  /**
   * Refers to a [[Question]]
   */
  public questionId: number | null;

  public reopenVoteCount: number | null;

  public score: number | null;

  public shareLink: string | null;

  public tags: string[] | null;

  public title: string | null;

  public upVoteCount: number | null;

  public upvoted: boolean | null;

  public viewCount: number | null;

  public constructor (question?: TypeQuestion) {
    this.acceptedAnswerId = question?.accepted_answer_id ?? null;
    this.answerCount = question?.answer_count ?? null;
    if (typeof question?.answers === 'undefined') {
      this.answers = null;
    } else {
      this.answers = question.answers
        .map((answer): Answer => new Answer(answer));
    }
    this.body = question?.body ?? null;
    this.bodyMarkdown = question?.body_markdown ?? null;
    this.bountyAmount = question?.bounty_amount ?? null;
    this.bountyClosesDate = question?.bounty_closes_date ?? null;
    if (typeof question?.bounty_user === 'undefined') {
      this.bountyUser = null;
    } else {
      this.bountyUser = new ShallowUser(question.bounty_user);
    }
    this.canClose = question?.can_close ?? null;
    this.canFlag = question?.can_flag ?? null;
    this.closeVoteCount = question?.close_vote_count ?? null;
    this.closedDate = question?.closed_date ?? null;
    if (typeof question?.closed_details === 'undefined') {
      this.closedDetails = null;
    } else {
      this.closedDetails = new ClosedDetails(question.closed_details);
    }
    this.closedReason = question?.closed_reason ?? null;
    this.commentCount = question?.comment_count ?? null;
    if (typeof question?.comments === 'undefined') {
      this.comments = null;
    } else {
      this.comments = question.comments
        .map((comment): Comment => new Comment(comment));
    }
    this.communityOwnedDate = question?.community_owned_date ?? null;
    this.creationDate = question?.creation_date ?? null;
    this.deleteVoteCount = question?.delete_vote_count ?? null;
    this.downVoteCount = question?.down_vote_count ?? null;
    this.downvoted = question?.downvoted ?? null;
    this.favoriteCount = question?.favorite_count ?? null;
    this.favorited = question?.favorited ?? null;
    this.isAnswered = question?.is_answered ?? null;
    this.lastActivityDate = question?.last_activity_date ?? null;
    this.lastEditDate = question?.last_edit_date ?? null;
    if (typeof question?.last_editor === 'undefined') {
      this.lastEditor = null;
    } else {
      this.lastEditor = new ShallowUser(question.last_editor);
    }
    this.link = question?.link ?? null;
    this.lockedDate = question?.locked_date ?? null;
    if (typeof question?.migrated_from === 'undefined') {
      this.migratedFrom = null;
    } else {
      this.migratedFrom = new MigrationInfo(question.migrated_from);
    }
    if (typeof question?.migrated_to === 'undefined') {
      this.migratedTo = null;
    } else {
      this.migratedTo = new MigrationInfo(question.migrated_to);
    }
    if (typeof question?.notice === 'undefined') {
      this.notice = null;
    } else {
      this.notice = new Notice(question.notice);
    }
    if (typeof question?.owner === 'undefined') {
      this.owner = null;
    } else {
      this.owner = new ShallowUser(question.owner);
    }
    this.protectedDate = question?.protected_date ?? null;
    this.questionId = question?.question_id ?? null;
    this.reopenVoteCount = question?.reopen_vote_count ?? null;
    this.score = question?.score ?? null;
    this.shareLink = question?.share_link ?? null;
    this.tags = question?.tags ?? null;
    this.title = question?.title ?? null;
    this.upVoteCount = question?.up_vote_count ?? null;
    this.upvoted = question?.upvoted ?? null;
    this.viewCount = question?.view_count ?? null;
  }
}
