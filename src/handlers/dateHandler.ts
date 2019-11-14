export const dateHandler = function dateHandler (date: Date): string {
  return Math.round(date.getTime() / 1000).toString();
};
