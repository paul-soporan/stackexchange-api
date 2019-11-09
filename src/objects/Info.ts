import {Site} from './Site';

import {TypeInfo} from '../result-types/TypeInfo';

/**
 * The equivalent of [Type info](https://api.stackexchange.com/docs/types/info).<br>
 * This object describes a [[Site]] in the [Stack Exchange network](https://stackexchange.com/sites).
 */
export class Info {

  public answersPerMinute: number;

  public apiRevision: string;

  public badgesPerMinute: number;

  public newActiveUsers: number;

  public questionsPerMinute: number;

  public site: Site;

  public totalAccepted: number;

  public totalAnswers: number;

  public totalBadges: number;

  public totalComments: number;

  public totalQuestions: number;

  public totalUnanswered: number;

  public totalUsers: number;

  public totalVotes: number;

  public constructor (info: TypeInfo) {
    this.answersPerMinute = info.answers_per_minute ?? null;
    this.apiRevision = info.api_revision ?? null;
    this.badgesPerMinute = info.badges_per_minute ?? null;
    this.newActiveUsers = info.new_active_users ?? null;
    this.questionsPerMinute = info.questions_per_minute ?? null;
    if (typeof info.site === 'undefined') {
      this.site = null;
    } else {
      this.site = new Site(info.site);
    }
    this.totalAccepted = info.total_accepted ?? null;
    this.totalAnswers = info.total_answers ?? null;
    this.totalBadges = info.total_badges ?? null;
    this.totalComments = info.total_comments ?? null;
    this.totalQuestions = info.total_questions ?? null;
    this.totalUnanswered = info.total_unanswered ?? null;
    this.totalUsers = info.total_users ?? null;
    this.totalVotes = info.total_votes ?? null;
  }
}
