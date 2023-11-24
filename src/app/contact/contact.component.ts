import { HttpClient } from '@angular/common/http';
import { Component, Directive, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

import { NgForm } from '@angular/forms';
import { z } from 'zod';

import { gsap } from 'gsap/gsap-core';

@Directive({selector: 'form-property'})
export class FormProperty {
  constructor(){
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  constructor(
    private httpClient: HttpClient,
    private _renderer2: Renderer2
  ){
    setTimeout(() => {
      this.clean();
    }, 1800);
  }

  name: string = '';
  email: string = '';
  company: string = '';

  captcha: string = '';
  ready: boolean = false;

  sent: boolean = false;

  getter(data: string) {
    return this[`${data}`].length > 0;
  }

  setter(data: string, value: string) {
    this[`${data}`] = value;
  }


  // sprawdzamy czy użytkownika chce dodać tab do tekstu
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
    message: z.string().min(5),

    recaptcha: z.string().min(10)
  });

  @ViewChild("area")
  area: ElementRef;

  @ViewChild("form")
  form: ElementRef;

  public async send(contactForm: NgForm): Promise<void> {

    const values = contactForm.value;

    if (!this.formSchema.safeParse(values).success || this.captcha.length < 10) return;

    let message = this.area.nativeElement.value.replaceAll("\n", "<br>");
    message = message.replaceAll("\t", '&nbsp;&nbsp;&nbsp;&nbsp;');

    
    this.httpClient
      .post(
        'https://mail-service-4o2h.onrender.com',
        JSON.stringify({
          name: values.name,
          email: values.email,

          company: values.company,
          message: message,

          captcha: this.captcha,
        })
      )
      .subscribe((e: {success: boolean}) => {
        e.success? emailHasBeenSent.call(this): alert("Somethink goes wrong, pleas try again later.");
      });

      function emailHasBeenSent()
    {
      gsap.to(this.form.nativeElement, {
        opacity: 0,
        duration: 1
      })
      .then(() => {
        this.form.nativeElement.remove();
        this.sent = true;
      });
    }
  }

  check(eve: any) {
    this.captcha = eve;
  }

  @ViewChildren(FormProperty)
  formsElements: QueryList<ElementRef>;

  clean()
  {
    this.formsElements.forEach((e: ElementRef) => {
      console.log();
    })
  }
}
