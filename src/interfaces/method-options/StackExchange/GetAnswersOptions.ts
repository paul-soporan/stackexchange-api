export interface GetAnswersOptions {
  fromDate?: Date;
  max?: Date;
  min?: Date;
  order?: 'desc' | 'asc';
  page?: number;
  pageSize?: number;
  site: string;
  sort?: 'activity' | 'creation' | 'votes';
  toDate?: Date;
}
