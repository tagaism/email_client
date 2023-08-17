import { Component, Input, OnChanges } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.css']
})
export class EmailReplyComponent {
  showModal: boolean = false;
  @Input() email!: Email;

  constructor(
    private emailService: EmailService
  ) {}

  ngOnChanges(): void {
    const text = `\n\n\n----------------${this.email.from} wrote:\n >${this.email.text.replaceAll('\n', '\n >')}\n----------------`;
    this.email = {
      ...this.email,
      to: this.email.from,
      from: this.email.to,
      subject: `Re: ${this.email.subject}`,
      text: text
    }
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    })
  }
}
