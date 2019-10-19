import {TypeOriginalQuestion} from '../result-types/TypeOriginalQuestion';

export class OriginalQuestion {

  public acceptedAnswerId?: number;

  public answerCount: number;

  public questionId: number;

  public title: string;

  public constructor (original_question: TypeOriginalQuestion) {
    this.acceptedAnswerId = original_question.accepted_answer_id ?? null;
    this.answerCount = original_question.answer_count;
    this.questionId = original_question.question_id;
    this.title = original_question.title;
  }
}
