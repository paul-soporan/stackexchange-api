import {Site} from './Site';

import {TypeInfo} from '../result-types/TypeInfo';

export class Info {

  public answersPerMinute: number;

  public apiRevision: string;

  public badgesPerMinute: number;

  public newActiveUsers: number;

  public questionsPerMinute: number;

  public site?: Site;

  public totalAccepted: number;

  public totalAnswers: number;

  public totalBadges: number;

  public totalComments: number;

  public totalQuestions: number;

  public totalUnanswered: number;

  public totalUsers: number;

  public totalVotes: number;

  public constructor (info: TypeInfo) {
    this.answersPerMinute = info.answers_per_minute;
    this.apiRevision = info.api_revision;
    this.badgesPerMinute = info.badges_per_minute;
    this.newActiveUsers = info.new_active_users;
    this.questionsPerMinute = info.questions_per_minute;
    if (typeof info.site === 'undefined') {
      this.site = null;
    } else {
      this.site = new Site(info.site);
    }
    this.totalAccepted = info.total_accepted;
    this.totalAnswers = info.total_answers;
    this.totalBadges = info.total_badges;
    this.totalComments = info.total_comments;
    this.totalQuestions = info.total_questions;
    this.totalUnanswered = info.total_unanswered;
    this.totalUsers = info.total_users;
    this.totalVotes = info.total_votes;
  }
}
