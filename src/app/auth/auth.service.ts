import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl: string = 'https://api.angular-email.com/';

  constructor(
    private httpClient: HttpClient
  ) { }

  ValidateUniqueUsername(username: string) {
    console.log(username)
    return this.httpClient.post<UniqeUsernameResponse>(`${this.rootUrl}auth/username`, {username: username})
  }

  signup(credentials: SignupCredentials) {
    console.log(credentials);
    return this.httpClient.post<SignupResponse>(`${this.rootUrl}auth/signup`, credentials);
  }
}
