import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user: User) {
    if (
      user.$lastname == undefined ||
      user.$firstname == undefined ||
      user.$mail == undefined ||
      user.$psw == undefined ||
      user.$lvl_id == undefined ||
      user.$birthdate == undefined ||
      user.$sex_id == undefined
      ) {
      return false;
    } else {
      return true;
    }
  }

   ValidateEmail(mail: string) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail));
   }
}
