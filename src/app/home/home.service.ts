import { Injectable } from '@angular/core';
import { TextPlugin, ScrollTrigger } from 'gsap/src/all';

import gsap from "gsap";
import { DeviceDetectorService } from 'ngx-device-detector';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  constructor(private deviceService: DeviceDetectorService, private router: Router){
    function kill()
    {
      this.route = false;
      this.process?.duration(0);
    }
    

    window.addEventListener('load', () => {
      // Your code to run when the entire page is ready
      this.init(this.elements, this.writeLine)
      
      this.router.events.subscribe(params => {
        if(params instanceof NavigationEnd)
        {
          const data = params.url.replace("/", "");
          data == ""? 
          [this.slides = [1,2,3], this.currentImg = 1, this.route = true, this.init(this.writeLine, this.elements)]: 
          kill.call(this);
        }
      });
    });
    
  }

  elements;
  writeLine;

  private topProperties = [];

  private interval;
  private process;

  private slides: number[] = [1, 2, 3];
  animationList: GSAPAnimation[] = [];

  private route: boolean = true;

  public machineWritting(writeLine?)
  {

    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    let limit: number = 3;

    const times = {
      1: 27,
      2: 8,
      3: 8
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

    return new Promise((resolve) => {
      function writeText(id: number)
      { 
        if(!this.route) return;
        if(!this.slides[this.slides.findIndex((e) => e === id)]) return resolve(7900);
        
        this.process = gsap.to(".machine_line_"+id, 
        {
          text: {
            value: textGather[id]
          },
          duration: times[id],
          delay: 1,
          ease: "none"
        });

        this.animationList.push(this.process);
        this.process.then(() => {
          if(!this.route) return;
          this.slides.splice(this.slides.findIndex((e) => e === id), 1);
          resolve(150);
        });
  
      }

      writeText.call(this, this.currentImg);
    });

  }

  private autoSlider(id: number, writeLine)
  {
    
    if(this.animationList.length) this.animationList = [];
    async function timeout()
    {

      const res = await this.machineWritting(writeLine);
      this.interval = setTimeout( async() => {

        if(id !== this.currentImg) return;

        this.slider(id, false);
  
        id++;
        if(id > this.imageLen) id = 1;
  
        if(this.route) timeout.call(this);
      }, res);
    }

    timeout.call(this);
    
  }

  public init(writeLine, elements): void
  {
    this.autoSlider(1, writeLine);

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

  public async slider(id: number, call: boolean)
  {
    if(call) this.process = undefined;
    if(this.interval) clearTimeout(this.interval);

    let secondSlideId;
    id? secondSlideId = this.currentImg + 1: secondSlideId = this.currentImg - 1;

    if(secondSlideId > this.imageLen) secondSlideId = 1;
    if(secondSlideId <= 0) secondSlideId = this.imageLen;

    this.move(!!id, secondSlideId);
    id? this.currentImg++: this.currentImg--;

    if(this.currentImg > this.imageLen) this.currentImg = 1;
    if(this.currentImg <= 0) this.currentImg = this.imageLen;

    if(this.animationList[0]) {this.animationList[0].duration(0); this.animationList = []};
    if(!this.process) this.autoSlider(this.currentImg, null)
  }

}