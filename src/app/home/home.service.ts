import { Injectable } from '@angular/core';
import { TextPlugin, ScrollTrigger } from 'gsap/src/all';

import gsap from "gsap";
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private deviceService: DeviceDetectorService){}
  private topProperties = [];

  public init(writeLine, elements): void
  {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".machine_line", 
    {
      text: {
        value: `In today's rapidly advancing technological landscape, the demand for high-quality and advanced counter-drone solutions is paramount. 
                As Unmanned Aerial Vehicles (UAVs) or drones proliferate across various applications, securing the airspace to protect your privacy becomes of utmost importance.
                At ITELITE Antennas, boasting over two decades of experience in manufacturing microwave antennas, we specialize in crafting high-quality and advanced counter-drone arrays. 
                Our dedication is to provide you with the coverage and assurance you need in the face of evolving UAV threats. 
                Whether you require a customized solution or a ready-to-go anti-drone antenna system, our products are designed to meet the highest standards of quality and performance.`
      },
      duration: 29,
      delay: 1,
      ease: "none"
    })
    .then(() => {
      setTimeout(() => {
        writeLine.nativeElement.remove();
      }, 1150);
    });

    gsap.fromTo(
      "h1",
      {
        y: -60,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1
      }
    )
    .delay(.5);

    this.scrollEvent();
    
    if(this.deviceService.isMobile() || this.deviceService.isTablet()) return;

    Array.from(elements)
    .forEach((e: HTMLElement) => {
      gsap.fromTo(e.querySelector(".content"),
        {
          y: '-=100',
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'easeInOut', 
          scrollTrigger: {
            trigger: e,
            start: '-40% 20%',
          }
        }
      );  
    })

    this.setSizes(elements);
  }

  public setSizes(elements)
  {
    this.topProperties = [];

    Array.from(elements)
    .forEach((e: HTMLElement) => {

       this.topProperties.push(
        {
          y: e.offsetTop, 
          size: e.offsetHeight 
        });

    });
  }

  scrollEvent()
  {

    const span = document.getElementsByClassName("number");
    let currentElementID: number;

    function scrollAnim(id): boolean
    {
      if(currentElementID == id) return false;

      setTimeout(() => {
        Array.from(span).forEach((e, _id) => {
          e['style'].top = `${(_id * 30) + id * (-30)}px`;
        });
      }, 700);
        
      return false;
    };

    const condition = (value: number) => 'value.y - window.innerHeight /'+value+' < document.body.scrollTop && (value.y - window.innerHeight / '+value+') + value.size > document.body.scrollTop';

    document.body.addEventListener("scroll", () => {
      
      this.topProperties.every((value, id: number) => {
        
        if(window.innerWidth > 1000? eval(condition(2.2)): eval(condition(2)) ) return scrollAnim(id);
        return true;
      });

      
    })
  }
}
