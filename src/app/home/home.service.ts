import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
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

  private autoSlider(id: number, writeLine)
  {
    
    if(this.animationList.length) this.animationList = [];
    async function timeout()
    {
      this.interval = setTimeout( async() => {

        if(id !== this.currentImg) return;

        this.slider(id, false);
  
        id++;
        if(id > this.imageLen) id = 1;
  
        if(this.route) timeout.call(this);
      }, 8300);
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