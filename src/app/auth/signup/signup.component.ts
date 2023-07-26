import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';
import { SignupCredentials } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/),
    ], [this.uniqueUserName.validate]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    passwordConfirmation: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  },
  { validators: [this.matchPassword.validate] });
  
  constructor(
    private matchPassword: MatchPassword,
    private uniqueUserName: UniqueUsername,
    private authService: AuthService
  ) {}

  onSignup() {
    if(this.authForm.invalid) {
      return;
    }

    this.authService.signup(this.authForm.value as SignupCredentials).subscribe({
      next: (response) => {
        // redirect to home page
      },
      error: (err) => {
        if(!err.status) {
          this.authForm.setErrors({ noConnection: true })
        } else {
          this.authForm.setErrors({ unknownError: true})
        }
      }
    });
  }
}
