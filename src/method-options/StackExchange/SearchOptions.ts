export interface SearchOptions {
  fromDate?: Date;
  inTitle?: string;
  max?: Date;
  min?: Date;
  notTagged?: string;
  order?: 'desc' | 'asc';
  page?: number;
  pageSize?: number;
  site: string;
  sort?: 'activity' | 'creation' | 'votes' | 'relevance';
  tagged?: string;
  toDate?: Date;
}
