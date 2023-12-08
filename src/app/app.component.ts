import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { Router } from '@angular/router';
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import { TextPlugin } from 'gsap/all';
import gsap from "gsap/gsap-core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.scss', '../../node_modules/bootstrap/scss/bootstrap.scss'],
  template: `
  <header>
    <h1>ANTI DRONE SOLUTIONS</h1>
  </header>`
})
export class AppComponent implements OnInit {

  title: string = 'anti-drone';
  itemLD = productLD;

  constructor( private router: Router, private metaService: Meta){}

  ngOnInit() {
    this.metaService.addTag({ name: 'json+ld', content: JSON.stringify(productLD) });
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(TextPlugin);

    this.router.events.subscribe( (e) => document.body.scroll({top: 0}) );
  }

  navigateToProducts()
  {
    this.router.navigate(["/"])
    .then(
      () => {
        gsap.to(document.body, {scrollTo: ".container-fluid", duration: 1})
        
      }
    );
  }
}

const productLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ITELITE",
  "image": "",
  "@id": "",
  "url": "https://antidroneantennas.net/#/",
  "telephone": "0713230180",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Terenowa 42",
    "addressLocality": "Wrocław",
    "postalCode": "52-231",
    "addressCountry": "PL"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "16:00"
  },
  "sameAs": [
    "https://www.facebook.com/itelitewifiantennas/",
    "https://pl.linkedin.com/company/itelite-dz",
    "https://www.instagram.com/itelitedrone/"
  ] 
}