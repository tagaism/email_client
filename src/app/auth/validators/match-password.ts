import { Injectable } from "@angular/core";
import { FormGroup, ValidationErrors, Validator } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class MatchPassword implements Validator{
  
  validate(control: FormGroup): ValidationErrors | null {
    const { password, passwordConfirmation} = control.value;
    if(password === passwordConfirmation) {
      return null;
    }
    return { PasswordsDoNotMatch: true };
  }

}
