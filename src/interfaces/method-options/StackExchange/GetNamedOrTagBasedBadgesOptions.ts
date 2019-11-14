export interface GetNamedOrTagBasedBadgesOptions {
  fromDate?: Date;
  inName?: string;
  max?: 'gold' | 'silver' | 'bronze';
  min?: 'gold' | 'silver' | 'bronze';
  order?: 'desc' | 'asc';
  page?: number;
  pageSize?: number;
  site: string;
  sort?: 'rank' | 'name';
  toDate?: Date;
}
