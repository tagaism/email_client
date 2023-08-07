import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EmailService } from '../email.service';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email!: Email;

  constructor (
    private router: ActivatedRoute,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    // console.log(this.router.snapshot);

    // this.router.params.subscribe((value) => {
    //   console.log(value);
    // })
    
    this.router.params.pipe(
      switchMap(({ id }) => {
        return this.emailService.getEmail(id)
      })
    ).subscribe((email: Email) => {
      console.log(email);
      this.email = email;
    })
  }
}
