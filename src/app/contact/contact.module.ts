import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxCaptchaModule
  ]
})
export class ContactModule { }
