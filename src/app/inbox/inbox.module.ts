import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { HomeComponent } from './home/home.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';


@NgModule({
  declarations: [
    HomeComponent,
    EmailShowComponent,
    EmailCreateComponent,
    EmailReplyComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule
  ]
})
export class InboxModule { }
