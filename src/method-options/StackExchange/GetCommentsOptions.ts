export interface GetCommentsOptions {
  fromDate?: Date;
  max?: Date;
  min?: Date;
  order?: 'desc' | 'asc';
  page?: number;
  pageSize?: number;
  site: string;
  sort?: 'creation' | 'votes';
  toDate?: Date;
}