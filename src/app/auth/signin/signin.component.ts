import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService, SigninCredentials } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-z0-9]+$/)
    ]),
    password: new FormControl('', [
      Validators.required,
    ])
  })

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
  }

  onSignin() {
    this.authService.signin(this.authForm.value as SigninCredentials).subscribe({
      next: () => {

      },
      error: () => {
        this.authForm.setErrors({ credentials: true });
      }
    });
  }
}
