export interface SimilarSearchOptions {
  fromDate?: Date;
  max?: Date;
  min?: Date;
  notTagged?: string;
  order?: 'desc' | 'asc';
  page?: number;
  pageSize?: number;
  site: string;
  sort?: 'activity' | 'creation' | 'votes' | 'relevance';
  tagged?: string;
  title: string;
  toDate?: Date;
}
