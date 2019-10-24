import {GetAnswersOptions} from './GetAnswersOptions';

export interface GetAnswersByIdsOptions extends GetAnswersOptions {
  ids: string[] | string;
}
