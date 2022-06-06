import { IAddress } from './address.interface';
export interface IClientsView {
  photo: string;
  user: string;
  email: string;
  posts: number;
  date: string;
  address: IAddress[]
}
