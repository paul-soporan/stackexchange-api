import {GetPostsOptions} from './GetPostsOptions';

export interface GetPostsByIdsOptions extends GetPostsOptions {
  ids: string[] | string;
}
