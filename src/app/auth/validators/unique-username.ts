import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator } from "@angular/forms";
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class UniqueUsername implements AsyncValidator{

  constructor(
    private authService: AuthService
  ){}

  validate = (control: AbstractControl): any => {
    const { value } = control;

    return this.authService.ValidateUniqueUsername(value)
    .pipe(
      map((val) => {
        return null;
      }),
      catchError((err) => {
        if(err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    )
  }
}
