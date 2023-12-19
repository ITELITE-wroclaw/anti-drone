import { Injectable } from '@angular/core';
import { TextPlugin, ScrollTrigger } from 'gsap/src/all';

import gsap from "gsap";
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private deviceService: DeviceDetectorService){}
  private topProperties = [];

  private interval;
  private process;

  private slides: number[] = [1, 2, 3];

  public machineWritting(writeLine?)
  {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    let limit: number = 3;

    const times = {
      1: 29,
      2: 10,
      3: 10
    }

    const textGather = {
      1: `In today's rapidly advancing technological landscape, the demand for high-quality and advanced counter-drone solutions is paramount. 
      As Unmanned Aerial Vehicles (UAVs) or drones proliferate across various applications, securing the airspace to protect your privacy becomes of utmost importance.
      At ITELITE Antennas, boasting over two decades of experience in manufacturing microwave antennas, we specialize in crafting high-quality and advanced counter-drone arrays. 
      Our dedication is to provide you with the coverage and assurance you need in the face of evolving UAV threats. 
      Whether you require a customized solution or a ready-to-go anti-drone antenna system, our products are designed to meet the highest standards of quality and performance.`,

      2: `Explore our range of drone defense systems that go beyond traditional measures. 
      Our anti-drone signal jammers provide a reliable defense against unauthorized UAV activities, offering peace of mind in sensitive areas.`,

      3: `Our solutions extend beyond mere protection – they redefine UAV defense.
      From drone interference devices to anti-drone RF shielding, our technology ensures a robust shield against airborne intruders.`
    }

    function writeText(id: number)
    {
      if(this.slides[id]) this.process = gsap.to(".machine_line_"+id, 
      {
        text: {
          value: textGather[id]
        },
        duration: times[id],
        delay: 1,
        ease: "none"
      });

      this.slides.splice(id, 1);

    }

    writeText.call(this, this.currentImg);
  }

  private autoSlider(id: number)
  {
    this.interval = setInterval(() => {
      this.slider(id);
      id++;
      if(id > this.imageLen) id = 1;
    }, 7900);
  }

  public init(writeLine, elements): void
  {
    this.machineWritting(writeLine);

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

  private scrollEvent()
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

  private move(flag: boolean, secondSlideId)
  {
    gsap.fromTo(`.box .slider:nth-of-type(${this.currentImg})`,
      {
        left: "0%"
      },
      {
        left: flag? "100%": "-100%"
      }
    )

    gsap.fromTo(`.box .slider:nth-of-type(${secondSlideId})`,
      {
        left: flag? "-100%": "100%"
      },
      {
        left: 0
      }
    )
  }

  private currentImg: number = 1;
  private readonly imageLen = 3;

  public slider(id: number)
  {
    if(this.interval) clearInterval(this.interval);

    let secondSlideId;
    id? secondSlideId = this.currentImg + 1: secondSlideId = this.currentImg - 1;

    if(secondSlideId > this.imageLen) secondSlideId = 1;
    if(secondSlideId <= 0) secondSlideId = this.imageLen;

    this.move(!!id, secondSlideId);
    id? this.currentImg++: this.currentImg--;

    if(this.currentImg > this.imageLen) this.currentImg = 1;
    if(this.currentImg <= 0) this.currentImg = this.imageLen;

  }

}