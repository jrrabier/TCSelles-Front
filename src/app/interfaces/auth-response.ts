import { User } from '../models/user';

export interface AuthResponse {
  success: true | false;
  token: string;
  user: User;
  msg: string;
}
