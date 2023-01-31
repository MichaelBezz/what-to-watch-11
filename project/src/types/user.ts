import {Token} from './authorization';

export type User = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: Token;
};

export type UserReview = Pick<User, 'id' | 'name'>;
