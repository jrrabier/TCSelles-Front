import { ValidatorFn, AbstractControl } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  const emailRe: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.\w{2,4}$/;

  return (control: AbstractControl): {[key: string]: any} | null => {
    const valid = emailRe.test(control.value);
    return valid ? null : {'email': {value: control.value}};
  };
}
