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
            <h1>COUNTER UAV</h1>
          </header>
          
          <p itemprop="description">
            <span #sliderText class="machine_line machine_line_1">
              &nbsp;Unlock the full potential of counter UAV antennas, designed for defending against drones by our anti drone defense antennas and 
              explore the intricate role these advanced antennas play in countering drones by skillfully disrupting their signals. 
              <br>
              &nbsp;Stay ahead of evolving threats with state-of-the-art counter-UAV, providing a robust drone solution by drone jammer antenna. 
              Safeguard your airspace with the latest innovations in anti drone disruption, including powerful jammer antennas which provide protection counter drone.
            </span>
            
          </p>
        </div>
        
      </div>
  
      <div class="slider">
        <img itemprop="image" title="Photo of truck parking from drone perspective" srcset="{{img_path}}slider_1_phone.webp 870w, {{img_path}}slider_1.webp 1153w" sizes="(max-width: 880px) 870px, 1153px" alt="Square with parking trucks.">
  
        <div class="text">
    
          <header>
            <h2>DRONE JAMMER ANTENNA</h2>
          </header>
          
          <p itemprop="description">
            <span #sliderText class="machine_line machine_line_2">
              &nbsp;&nbsp;&nbsp;&nbsp;Discover the cutting-edge drone jammer antennas, precisely engineered to protect against UAV intrusions. 
              Learn how these devices adeptly disrupt drone signals, offering a reliable counter drone solution for safeguarding your airspace from potential threats. 
              <br>
              &nbsp;&nbsp;&nbsp;&nbsp;Explore the latest advancements in counter-drone technology, ensuring anti drone solution. 
              Uncover the effectiveness of jammer antennas, contributing to comprehensive counter UAV protection.
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
              &nbsp;&nbsp;&nbsp;&nbsp;As drones become more prevalent, the necessity for effective anti drone jammer antennas is paramount. 
              Dive into the world of drone detection system and uncover comprehensive approaches to protect your airspace and provide counter UAV solution. 
              <br>
              &nbsp;&nbsp;&nbsp;&nbsp;Explore a diverse range of counter-drone antennas designed to deter and neutralize unmanned aerial threats. 
              Stay secure with innovative anti drone defense, precisely tailored to safeguard your environment and ensure uncompromised counter drone solution.
            </span>
            
          </p>
        </div>
        
      </div>
    </div>`,
})
export class HomeComponent implements AfterViewInit {
  constructor(
    public homeService: HomeService,
    private deviceDet: DeviceDetectorService,
    private metaTagService: Meta,
    private renderer: Renderer2
  ) {}

  private elements: HTMLCollectionOf<Element>;
  protected images: Blob[] = [];

  protected img_path: string = './assets/images/home/content/';
  @ViewChildren('container')
  container;

  public ngOnInit(): void {}

  details: { [key: number]: generalDetails } = {
    0: {
      header: 'ADAS 1.1 O',
      img_num: '1',
      frequency: '433MHz – 1.3GHz, 2.4GHz – 2.5GHz , 5.1GHz – 6GHz',
      description: {
        p1: `
          Using these 2 counter drone antennas, you can build a drone jammer system covering different sectors for bands 433MHz to 1.3GHz (PAT0413G5) and from 2.4GHz to 6GHz (PAT2450G10).
          antenna is vertically polarized.
        `,
        p2: `
          The PAT0413G5 gain is in the range of 3.4 – 8.7dBi.
          On the other hand, the PAT2450G10 gain is 9-10 dBi.
          This counter UAV antenna is designed for covering a wide range of frequencies with consistency in gain and beamwidth and providing 360 degrees of coverage. 
          The system is divided into 4 quadrants, each quadrant containing a vertically polarized antenna, covering 433MHz to 6GHz.
        `,
      },
    },
    1: {
      header: 'ADAS 2.1 O',
      img_num: '2',
      frequency: '400MHz – 7.2GHz',
      description: {
        p1: `This is a ruggedized steel directive LPD jammer antenna covering from 400MHz up to 7.2GHz.
        The gain and radiation pattern are quite stable within all the operational antenna’s bandwidth.`,
        p2: `The polarization is linear and by rotating the antenna you can set the polarization to H, V or slant polarization.
        This counter drone antenna is designed for covering a wide range of frequencies with consistency in gain and beamwidth and providing 360 degrees of coverage. 
        The system is divided into 4 quadrants, each quadrant containing a vertically polarized antenna, covering 400MHz to 7.2GHz.`,
      },
    },
    2: {
      header: 'ADAS 1.1 D',
      img_num: '3',
      frequency: '400MHz – 6GHz',
      description: {
        p1: `
          This is a compact microstrip directive LPD drone jammer antenna covering from 400MHz up to 6GHz.
          The gain and radiation pattern are quite stable within all the operational antenna’s bandwidth.`,
        p2: `
          The polarization is linear and by rotating the antenna you can set the polarization to H, V or slant polarization.
          The counter UAV antenna is made up using 2 sub-antennas combined with a diplexer, providing a smooth and uniform response.
          This is a compact microstrip directive Vivaldi counter drone antenna covering from 400MHz up to 6GHz with a gain of up to 12 dBi. 
          The polarization is dual linear and by rotating the antenna you can set the polarization to H&V or slant polarization.`,
      },
    },
    3: {
      header: 'ADAS 2.1 D',
      img_num: '4',
      frequency: '500MHz – 7.2GHz',
      description: {
        p1: `
          This is a compact microstrip directive Vivaldi anti drone antenna covering from 500MHz up to 7.2GHz with a gain of up to 12 dBi.
          The polarization is dual linear and by rotating the antenna you can set the polarization to H&V or slant polarization.
          `,
        p2: `
          The gain and radiation pattern are quite stable within all the operational antenna’s bandwidth. 
          The polarization is linear and by rotating the antenna you can set the polarization to H, V or slant polarization. 
          `,
      },
    },
    4: {
      header: 'CUSTOM',
      img_num: '5',
      form: true,
      description: {
        p1: `
          We can help you to build your own counter drone antenna. Our team specialize in custom build antennas for different aplications for over 20 years now.
          We custom everything from the antenna through housing mounting to connectors. With our knowledge your airspace will be secure from counter UAV by anti drone jammer antenna.
          `,
      },
    },
  };

  @ViewChildren('arrow')
  arrows: QueryList<ElementRef>;

  @ViewChildren('sliderText')
  sliderText: QueryList<ElementRef>;

  @ViewChild('machine_line')
  machine_line: ElementRef;

  @ViewChild('write_line')
  writeLine: ElementRef;

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
              if (element.hasAttribute('data-id'))
                return resolve({ target: element });
              resolve(await getProperElement(element.parentElement));
            });
          }

          return await getProperElement(e.target);
        })
      )
      .subscribe((e: Promise<{ target: HTMLElement }>) => {
        e.then((result: { target: HTMLElement }) => {
          this.homeService.slider(
            Number(result.target.getAttribute('data-id')),
            true
          );
        });
      });
  }

  handleResize(event) {
    this.container;
    if (this.elements)
      this.homeService.setSizes(
        this.container._results.map((e) => e.nativeElement)
      );
  }
}