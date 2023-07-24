import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class MatchPassword implements Validator{
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const { password, passwordConfirmation } = control.value;
    if(password === passwordConfirmation){
      return null;
    }
    return { passwordDontMatch: true };
  }


  // validate(control: Ab): ValidationErrors | null {
  //   const { password, passwordConfirmation} = control.value;
  //   if(password === passwordConfirmation) {
  //     return null;
  //   }
  //   return { PasswordsDoNotMatch: true };
  // }

}
