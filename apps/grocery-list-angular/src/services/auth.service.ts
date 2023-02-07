import { Injectable } from '@angular/core';
import {IUser} from "../models/User";

@Injectable()
export class AuthService {
  user: IUser | null = null;
  signIn(email: string, password: string): Promise<IUser> {
    this.user = {
      id: 'test',
      email
    }
    return Promise.resolve(this.user);
  }
  signOut(): Promise<void> {
    this.user = null;
    return Promise.resolve();
  }
}
