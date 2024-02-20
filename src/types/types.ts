export type CABIN = {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
};
export type NEWCABIN = {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: File;
};
