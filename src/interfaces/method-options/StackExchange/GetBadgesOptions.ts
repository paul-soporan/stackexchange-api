export interface GetBadgesOptions {
  fromDate?: Date;
  inName?: string;
  max?: 'gold' | 'silver' | 'bronze';
  min?: 'gold' | 'silver' | 'bronze';
  named?: boolean;
  order?: 'desc' | 'asc';
  page?: number;
  pageSize?: number;
  site: string;
  sort?: 'rank' | 'name' | 'type';
  tagBased?: boolean;
  toDate?: Date;
}
