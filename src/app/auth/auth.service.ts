import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UniqeUsernameResponse {
  available: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  ValidateUniqueUsername(username: string) {
    console.log(username)
    return this.httpClient.post<UniqeUsernameResponse>("https://api.angular-email.com/auth/username", {username: username})
  }
}
