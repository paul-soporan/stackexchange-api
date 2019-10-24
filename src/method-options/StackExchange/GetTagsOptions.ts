export interface GetTagsOptions {
  fromDate?: Date;
  inName?: string;
  max?: number;
  min?: number;
  order?: 'desc' | 'asc';
  page?: number;
  pageSize?: number;
  site: string;
  sort?: 'popular' | 'activity' | 'name';
  toDate?: Date;
}
