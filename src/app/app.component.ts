import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { Router } from '@angular/router';
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import { TextPlugin } from 'gsap/all';
import gsap from "gsap/gsap-core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.scss', '../../node_modules/bootstrap/scss/bootstrap.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title: string = 'anti-drone';
  itemLD = productLD;

  @ViewChild("nav")
  navElement: ElementRef;
  
  constructor( private router: Router, private metaService: Meta, private renderer: Renderer2){}

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.navElement.nativeElement, "width", `calc(100% - ${window.innerWidth - this.renderer.selectRootElement("body", true).clientWidth}px)`);
  }

  ngOnInit() {
    this.metaService.addTag({ name: 'json+ld', content: JSON.stringify(productLD) });
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(TextPlugin);

    this.router.events.subscribe( (e) => this.renderer.selectRootElement("body", true).scroll({top: 0}) );
  }

  navigateToProducts(data: string)
  {
    this.router.navigate(["/"])
    .then(
      () => {
        switch(data)
        {
          case "/":
            gsap.to(this.renderer.selectRootElement("body", true), {scrollTo: ".container-fluid", duration: 1});
          break;
          case "custom":
            gsap.to(this.renderer.selectRootElement("body", true), {scrollTo: ".container-fluid:nth-of-type(5)", duration: 1})
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