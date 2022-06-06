export interface IAddress {
  streetA: string;
  streetB: string;
  streetC: string;
  streetD: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  geo: IGeo;
}

interface IGeo {
  lat: string;
  lng: string;
}
