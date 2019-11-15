import {Filter} from '../index';

export const filterHandler = function filterHandler (
  filter: Filter | string
): string {
  if (typeof filter === 'string') {
    return filter;
  }
  if (filter.filter === null) {
    return 'default';
  }
  return filter.filter;
};
