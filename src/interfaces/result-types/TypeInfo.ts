import {TypeSite} from './TypeSite';

export interface TypeInfo {
  readonly answers_per_minute?: number;
  readonly api_revision?: string;
  readonly badges_per_minute?: number;
  readonly new_active_users?: number;
  readonly questions_per_minute?: number;
  readonly site?: TypeSite;
  readonly total_accepted?: number;
  readonly total_answers?: number;
  readonly total_badges?: number;
  readonly total_comments?: number;
  readonly total_questions?: number;
  readonly total_unanswered?: number;
  readonly total_users?: number;
  readonly total_votes?: number;
}
