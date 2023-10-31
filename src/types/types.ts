export type City = Point & {
  zoom: number;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};
