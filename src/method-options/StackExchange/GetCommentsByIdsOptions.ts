import {GetCommentsOptions} from './GetCommentsOptions';

export interface GetCommentsByIdsOptions extends GetCommentsOptions {
  ids: string[] | string;
}
