import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';

import { NgForm } from '@angular/forms';
import { z } from 'zod';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit{

  constructor(
    private httpClient: HttpClient,
    private _renderer2: Renderer2, 
    private elementRef: ElementRef
  ){}

  name: string = '';
  email: string = '';
  company: string = '';

  captcha: string = '';
  ready: boolean = false;

  ngOnInit(): void {
    
  }

  getter(data: string) {
    return this[`${data}`].length > 0;
  }

  setter(data: string, value: string) {
    this[`${data}`] = value;
  }

  checkKey(e: KeyboardEvent, textarea: HTMLTextAreaElement) {
    if (e.key == 'Tab') {
      e.preventDefault();

      textarea.setRangeText(
        '\t',

        textarea.selectionStart,
        textarea.selectionStart,

        'end'
      );
    }
  }

  private formSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),

    company: z.string().min(2),
    message: z.string().min(25),

    recaptcha: z.string().min(10)
  });

  public async send(contactForm: NgForm): Promise<void> {
    const values = contactForm.value;

    if (!this.formSchema.safeParse(values).success || this.captcha.length < 10) return;

    this.httpClient
      .post(
        'https://mail-service-4o2h.onrender.com',
        JSON.stringify({
          name: values.name,
          email: values.email,

          company: values.company,
          message: values.message,

          captcha: this.captcha,
        })
      )
      .subscribe((e: {success: boolean}) => {
        e.success? alert("E-mail has been sent."): alert("Somethink goes wrong, pleas try again later.");
      });
  }

  check(eve: any) {
    this.captcha = eve;
  }
}
