export const semiDelimitedListHandler = function semiDelimitedListHandler (
  list: string[] | string
): string {
  if (Array.isArray(list)) {
    return list.join(';');
  }
  return list;
};
