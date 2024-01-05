import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { TextPlugin, ScrollTrigger } from 'gsap/src/all';

import gsap from "gsap";
import { DeviceDetectorService } from 'ngx-device-detector';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  private renderer: Renderer2

  constructor(private deviceService: DeviceDetectorService, private router: Router, rendererFactory: RendererFactory2){

    this.renderer = rendererFactory.createRenderer(null, null);

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

    const textGather = {
      1: `Unlock the capabilities of anti-drone antennas in detecting and defending against unmanned aerial vehicles.
      Explore how these advanced antennas play a crucial role in countering drones by disrupting their signals. 
      Stay ahead of evolving threats with state-of-the-art counter-UAS technology, providing you with a robust defense system against unauthorized drone activities. 
      Safeguard your airspace with the latest in drone detection and disruption.`,

      2: `Discover the cutting-edge technology of drone jammers, designed to protect against unwanted UAV intrusions. 
      Learn how these devices disrupt drone signals, providing a reliable solution for safeguarding your airspace from potential threats. 
      Explore the latest advancements in counter-drone technology and ensure the security of your surroundings.`,

      3: `As drones become more prevalent, the need for effective counter-drone technology is paramount. 
      Dive into the world of drone defense solutions and discover comprehensive approaches to protect your airspace. 
      From RF interference for drones to sophisticated detection systems, explore a range of solutions designed to deter and neutralize unmanned aerial threats. 
      Stay secure with innovative counter-UAS equipment tailored to safeguard your environment.`
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
          duration: 18,
          delay: 1,
          ease: "none"
        });

        this.animationList.push(this.process);
        this.process.then(() => {
          if(!this.route) return;
          this.slides.splice(this.slides.findIndex((e) => e === id), 1);
          resolve(750);
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
    this.scrollEvent();

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

    if(!(elements instanceof Array)) return;
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
    const span = this.renderer.selectRootElement("#counter", true).getElementsByClassName("number");
    const body = this.renderer.selectRootElement("body", true);

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

    const condition = (value: number) => 'value.y - window.innerHeight /'+value+' < body.scrollTop && (value.y - window.innerHeight / '+value+') + value.size > body.scrollTop';

    body.addEventListener("scroll", () => {

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