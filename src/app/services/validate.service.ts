import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  public MAILREGEX: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  public MOBILEREGEX: RegExp = /^0(6|7)\d{8}$/;

  constructor() { }

  validateRegister(user: User) {
    if (
      user.lastname == undefined ||
      user.firstname == undefined ||
      user.mail == undefined ||
      user.psw == undefined ||
      user.lvl_id == undefined ||
      user.birthdate == undefined ||
      user.sex_id == undefined
      ) {
      return false;
    } else {
      return true;
    }
  }

   ValidateEmail(mail: string) {
    return this.MAILREGEX.test(mail);
   }

   /**
    * Contrôle la validité du numéro de mobile
    * @param mobile numéro de mobile
    */
   ValidateMobile(mobile: string) {
    return this.MOBILEREGEX.test(mobile);
   }
}
