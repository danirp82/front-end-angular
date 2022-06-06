import { IAccountHistory } from './account-history.insterface';
import { IAddress } from './address.interface';
import { IPost } from './post.interface';
export interface IClients {
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: { name: string };
  posts: IPost[];
  accountHistory: IAccountHistory[];
  subject: string;
}

