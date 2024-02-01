import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { generalDetails } from './detailsTypes';
import { HomeService } from './home.service';

import { DeviceDetectorService } from 'ngx-device-detector';
import { Meta } from '@angular/platform-browser';
import { fromEvent, map, merge } from 'rxjs';
import { data } from './detailsToSupply';

@Directive({ selector: 'arrow' })
class Arrow {}

@Directive({ selector: 'sliderText' })
class sliderText {}

@Directive({ selector: 'container' })
class container {}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  template: `
  <div class="box">
      <div class="slider">
        <img itemprop="image" title="Factory image" srcset="{{img_path}}slider_2_phone.webp 870w, {{img_path}}slider_2.webp 1153w" sizes="(max-width: 880px) 870px, 1153px" alt="Factory stands after lake.">
  
        <div class="text">
    
          <header>
            <h1>COUNTER UAV | DRONE JAMMER</h1>
          </header>
          
          <p itemprop="description">
            <span #sliderText class="machine_line machine_line_1">
              Equip yourself in against drone solution by unlock the full potential of drone jammer designed for defending <strong>C-UAV</strong>. 
              Our solutions give a possibilities to stay ahead of evolving threats with state-of-the-art  protection, 
              providing a comprehensive <strong>drone jammers</strong> and remained your airspace safe by splendid solution for empower drone jammer system and counter drone protection.
            </span>
            
          </p>
        </div>
        
      </div>
  
      <div class="slider">
        <img itemprop="image" title="Photo of truck parking from drone perspective" srcset="{{img_path}}slider_1_phone.webp 870w, {{img_path}}slider_1.webp 1153w" sizes="(max-width: 880px) 870px, 1153px" alt="Square with parking trucks.">
  
        <div class="text">
    
          <header>
            <h2>JAMMER ANTENNA</h2>
          </header>
          
          <p itemprop="description">
            <span #sliderText class="machine_line machine_line_2">
              &nbsp;&nbsp;&nbsp;&nbsp;Discover the cutting-edge <strong>jamming antenna</strong>, precisely engineered by our team to protect against UAV intrusions. 
              These devices offering a reliable solution for safeguarding your airspace from potential threats. 
              Explore the latest advancements in <strong>counter-drone</strong> technology, ensuring complex protection. 
              Our company has over 20 years experience in antennas manufacturing so performing <strong>drone jammers</strong> definitely is not exceed our knowledge and skills. 
              Get rid unwanted threat use one of our devices or by manufactured custom UAV countermeasure.
            </span>
            
          </p>
        </div>
        
      </div>

      <div class="slider">
        <img itemprop="image" title="Sea photo" srcset="{{img_path}}slider_3_phone.webp 870w, {{img_path}}slider_3.webp 1153w" sizes="(max-width: 880px) 870px, 1153px" alt="Boat is swimming via sea and in the background haven is visible.">
  
        <div class="text">
    
          <header>
            <h2>COUNTER DRONE</h2>
          </header>
          
          <p itemprop="description">
            <span #sliderText class="machine_line machine_line_3">
              &nbsp;&nbsp;&nbsp;&nbsp;As drones become more prevalent, the necessity for effective <strong>drone jammer</strong> is paramount. 
              Dive into the world of <strong>counter UAV systems</strong> and explore comprehensive approaches to protect your airspace. 
              Explore a diverse range of counter-drone dome designed to deter and neutralize unmanned aerial threats.
              Stay secure with our splendid <strong>C-UAV</strong> innovative solution, precisely tailored to safeguard your environment and ensure uncompromised solution.
            </span>
            
          </p>
        </div>
        
      </div>
    </div>
    

    <div #arrow data-id="0" class="slide previous"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></div>
    <div #arrow data-id="1" class="slide next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#ffffff" d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></div>

    <span class="line"></span>
  </section>
  
  <header class="header">
    <h2>Drone Jammers</h2>
  </header>`
})
export class HomeComponent implements AfterViewInit {
  constructor(
    public homeService: HomeService,
    private deviceDet: DeviceDetectorService,
    private metaTagService: Meta,
    private renderer: Renderer2
  ){}

  private elements: HTMLCollectionOf<Element>;
  protected images: Blob[] = [];

  protected img_path: string = './assets/images/home/content/';

  @ViewChildren('arrow')
  arrows: QueryList<ElementRef>;

  @ViewChildren('sliderText')
  sliderText: QueryList<ElementRef>;

  @ViewChild('machine_line')
  machine_line: ElementRef;

  @ViewChild('write_line')
  writeLine: ElementRef;

  @ViewChildren('container')
  container;

  details: { [key: number]: generalDetails } = data;

  async ngAfterViewInit(): Promise<void> {
    this.elements = this.renderer
      .selectRootElement('#items', true)
      .getElementsByClassName('.container-fluid');

    this.homeService.elements = this.elements;
    this.homeService.writeLine = this.writeLine;

    merge(
      fromEvent(this.arrows.first.nativeElement, 'click'),
      fromEvent(this.arrows.last.nativeElement, 'click')
    )
      .pipe(
        map(async (e: { target: HTMLElement }) => {
          function getProperElement(
            element: HTMLElement
          ): Promise<{ target: HTMLElement }> {
            return new Promise(async (resolve) => {

              if(element.hasAttribute('data-id')) return resolve({ target: element });
              resolve(await getProperElement(element.parentElement));
            });
          }

          return await getProperElement(e.target);
        })
      )
      .subscribe((e: Promise<{ target: HTMLElement }>) => {
        e.then((result: { target: HTMLElement }) => {
          this.homeService.slider(Number(result.target.getAttribute('data-id')),true);
        });
      });
  }

  handleResize(event) {
    this.container;
    if(this.elements) this.homeService.setSizes(this.container._results.map((e) => e.nativeElement));
  }
}