import {TypeSite} from './TypeSite';

export interface TypeInfo {
  answers_per_minute: number;
  api_revision: string;
  badges_per_minute: number;
  new_active_users: number;
  questions_per_minute: number;
  site?: TypeSite;
  total_accepted: number;
  total_answers: number;
  total_badges: number;
  total_comments: number;
  total_questions: number;
  total_unanswered: number;
  total_users: number;
  total_votes: number;
}
