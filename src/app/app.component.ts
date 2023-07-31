import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email_client';
  signedin: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.signedin$.subscribe((signedin) => {
      this.signedin = signedin;
    })
  }
}
