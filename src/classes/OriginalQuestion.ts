import {TypeOriginalQuestion} from '../interfaces/result-types/TypeOriginalQuestion';

/**
 * The equivalent of [Type original_question](https://api.stackexchange.com/docs/types/original-question).<br>
 * This object represents an "original" [[Question]] that another was closed as a duplicate of.<br>
 * This object is mostly analogous to a row in the "gray box" that appears in Questions closed as duplicates which lists Original Questions.
 */
export class OriginalQuestion {

  /**
   * *May be absent, in which case it is set to `null`*
   */
  public acceptedAnswerId: number | null;

  public answerCount: number | null;

  /**
   * Refers to a [[Question]]
   */
  public questionId: number | null;

  public title: string | null;

  public constructor (original_question?: TypeOriginalQuestion) {
    this.acceptedAnswerId = original_question?.accepted_answer_id ?? null;
    this.answerCount = original_question?.answer_count ?? null;
    this.questionId = original_question?.question_id ?? null;
    this.title = original_question?.title ?? null;
  }
}
