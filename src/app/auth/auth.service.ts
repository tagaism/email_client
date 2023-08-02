import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface UniqeUsernameResponse {
  available: boolean
}

export interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string
}

interface SignedinResponse {
  authenticated: boolean;
  username: string
}

export interface SigninCredentials {
  username: string,
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl: string = 'https://api.angular-email.com/';
  signedin$ = new BehaviorSubject(false);

  constructor(
    private httpClient: HttpClient
  ) { }

  ValidateUniqueUsername(username: string) {
    return this.httpClient.post<UniqeUsernameResponse>(`${this.rootUrl}auth/username`, {username: username})
  }

  signup(credentials: SignupCredentials) {
    return this.httpClient
      .post<SignupResponse>(`${this.rootUrl}auth/signup`, credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      )
  }

  checkAuth() {
    return this.httpClient.get<SignedinResponse>(`${this.rootUrl}auth/signedin`)
      .pipe(
        tap(({ authenticated }) => {
          this.signedin$.next(authenticated);
        })
      )
  }

  signout() {
    return this.httpClient.post(`${this.rootUrl}auth/signout`, {})
      .pipe(
        tap(() => {
          this.signedin$.next(false);
        })
      )
  }

  signin(credentials: SigninCredentials) {
    return this.httpClient.post(`${this.rootUrl}auth/signin`, credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }
}