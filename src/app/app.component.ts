import { AfterViewInit, Component, OnInit, Renderer2, RendererFactory2, ViewEncapsulation } from '@angular/core';
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
export class AppComponent implements OnInit, AfterViewInit {

  title: string = 'anti-drone';
  itemLD = productLD;
  private renderer: Renderer2;
  
  constructor( private router: Router, private metaService: Meta, private rendererFactory: RendererFactory2){
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngAfterViewInit(): void {

    document.querySelector("nav").style.width = `calc(100% - ${window.innerWidth - window.document.body.clientWidth}px)`;
  }

  ngOnInit() {
    this.metaService.addTag({ name: 'json+ld', content: JSON.stringify(productLD) });
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(TextPlugin);

    this.router.events.subscribe( (e) => document.body.scroll({top: 0}) );
  }

  navigateToProducts(data: string)
  {
    this.router.navigate(["/"])
    .then(
      () => {
        switch(data)
        {
          case "/":
            gsap.to(document.body, {scrollTo: ".container-fluid", duration: 1});
          break;
          case "custom":
            gsap.to(document.body, {scrollTo: ".container-fluid:nth-of-type(5)", duration: 1})
          break;
        }
        
        
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