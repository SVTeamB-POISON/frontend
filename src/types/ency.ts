export type EncyData = {
  name: string;
  s3_url: string;
  poison: boolean;
};
export type EncyResponse = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: null | string;
  prevPage: null | string;
  data: EncyData[];
};
