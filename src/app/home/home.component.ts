import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

import { generalDetails } from './detailsTypes';
import { HomeService } from './home.service';

import { DeviceDetectorService } from 'ngx-device-detector';
import { Meta } from '@angular/platform-browser';
import { fromEvent, map, merge } from 'rxjs';

@Directive({selector: "arrow"})
class Arrow{}

@Directive({selector: "sliderText"})
class sliderText{}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  template: `
    <div class="text">
      
      <header>
        <h1>Anti-Drone Antennas</h1>
      </header>
      
      <p itemprop="description">
        <span #sliderText class="machine_line_1">
          Unlock the capabilities of anti-drone antennas in detecting and defending against unmanned aerial vehicles.
          Explore how these advanced antennas play a crucial role in countering drones by disrupting their signals. 
          Stay ahead of evolving threats with state-of-the-art counter-UAS technology, providing you with a robust defense system against unauthorized drone activities. 
          Safeguard your airspace with the latest in drone detection and disruption.
        </span>
        <span #write_line class="write_line"> |</span>
      </p>
    </div>

    <div class="text">
    
          <header>
            <h1>Drone Jammer Technology</h1>
          </header>
          
          <p itemprop="description">
            <span #sliderText class="machine_line_2">
              Discover the cutting-edge technology of drone jammers, designed to protect against unwanted UAV intrusions. 
              Learn how these devices disrupt drone signals, providing a reliable solution for safeguarding your airspace from potential threats. 
              Explore the latest advancements in counter-drone technology and ensure the security of your surroundings.
            </span>
            <span #write_line class="write_line"> |</span>
          </p>
    </div>
      
    <div class="text">
      
      <header>
        <h1>Drone Defense Solutions - UAV</h1>
      </header>
      
      <p itemprop="description">
        <span #sliderText class="machine_line_3">
          As drones become more prevalent, the need for effective counter-drone technology is paramount. 
          Dive into the world of drone defense solutions and discover comprehensive approaches to protect your airspace. 
          From RF interference for drones to sophisticated detection systems, explore a range of solutions designed to deter and neutralize unmanned aerial threats. 
          Stay secure with innovative counter-UAS equipment tailored to safeguard your environment.
        </span>
        <span #write_line class="write_line"> |</span>
      </p>
    </div>
  `
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  constructor(
    public homeService: HomeService,
    private deviceDet: DeviceDetectorService,
    private metaTagService: Meta,
    private changeDet: ChangeDetectorRef
  ){
    homeService.changeDet
    .subscribe((e) => changeDet.detectChanges())
  }

  private elements: HTMLCollectionOf<Element> = document.getElementsByClassName('container-fluid');
  protected images: Blob[] = [];

 public ngOnInit(): void {
    this.metaTagService.addTags([
      {name: "keywords", content: "anti drone antennas, anti drone, anti drone antenna, counter drone antennas, drone jammers antennas, counter uav antennas, ant uav antennas, drone dome, airspace security, drone protection"},
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Łukasz Trzepadłek' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' }
    ])
  }

  ngOnDestroy(): void {
    
  }

  details: { [key: number]: generalDetails} = {
    0: {
      header: 'ADAS 1.1 O',
      img_num: '1',
      frequency: '433MHz – 1.3GHz, 2.4GHz – 2.5GHz , 5.1GHz – 6GHz',
      description: {
        p1: `
          Using these 2 antennas, you can build a system covering different sectors for bands 433MHz to 1.3GHz (PAT0413G5) and from 2.4GHz to 6GHz (PAT2450G10).
          antenna is vertically polarized.
        `,
        p2: `
          The PAT0413G5 gain is in the range of 3.4 – 8.7dBi.
          On the other hand, the PAT2450G10 gain is 9-10 dBi.
          This antenna system is designed for covering a wide range of frequencies with consistency in gain and beamwidth and providing 360 degrees of coverage. 
          The system is divided into 4 quadrants, each quadrant containing a vertically polarized antenna, covering 433MHz to 6GHz.
        `
      },
    },
    1: {
      header: 'ADAS 2.1 O',
      img_num: '2',
      frequency: '400MHz – 7.2GHz',
      description: {
        p1: `This is a ruggedized steel directive LPD antenna covering from 400MHz up to 7.2GHz.
        The gain and radiation pattern are quite stable within all the operational antenna’s bandwidth.`,
        p2: `The polarization is linear and by rotating the antenna you can set the polarization to H, V or slant polarization.
        This antenna system is designed for covering a wide range of frequencies with consistency in gain and beamwidth and providing 360 degrees of coverage. 
        The system is divided into 4 quadrants, each quadrant containing a vertically polarized antenna, covering 400MHz to 7.2GHz.`
      }
    },
    2: {
      header: 'ADAS 1.1 D',
      img_num: '3',
      frequency: '400MHz – 6GHz',
      description: {
        p1: `
          This is a compact microstrip directive LPD antenna covering from 400MHz up to 6GHz.
          The gain and radiation pattern are quite stable within all the operational antenna’s bandwidth.`, 
        p2: `
          The polarization is linear and by rotating the antenna you can set the polarization to H, V or slant polarization.
          The antenna is made up using 2 sub-antennas combined with a diplexer, providing a smooth and uniform response.
          This is a compact microstrip directive Vivaldi antenna covering from 400MHz up to 6GHz with a gain of up to 12 dBi. 
          The polarization is dual linear and by rotating the antenna you can set the polarization to H&V or slant polarization.`
      },
    },
    3: {
      header: 'ADAS 2.1 D',
      img_num: '4',
      frequency: '500MHz – 7.2GHz',
      description: {
        p1: `
          This is a compact microstrip directive Vivaldi antenna covering from 500MHz up to 7.2GHz with a gain of up to 12 dBi.
          The polarization is dual linear and by rotating the antenna you can set the polarization to H&V or slant polarization.
          `,
        p2: `
          The gain and radiation pattern are quite stable within all the operational antenna’s bandwidth. 
          The polarization is linear and by rotating the antenna you can set the polarization to H, V or slant polarization. 
          `
      }
    },
    4: {
      header: 'CUSTOM',
      img_num: '5',
      form: true,
      description: {
        p1: `
          We can help you to build your own counter drone antenna. Our team specialize in custom build antennas for different aplications for over 20 years now.
          We custom everything from the antenna through housing mounting to connectors.
          `
      }
    },
  };

  @ViewChildren("arrow")
  arrows: QueryList<ElementRef>;

  @ViewChildren("sliderText")
  sliderText: QueryList<ElementRef>;

  @ViewChild('machine_line')
  machine_line: ElementRef;

  @ViewChild('write_line')
  writeLine: ElementRef;

  async ngAfterViewInit(): Promise<void> {

    this.homeService.elements = this.elements;
    this.homeService.writeLine = this.writeLine;
    
    merge(
      fromEvent( this.arrows.first.nativeElement, "click"),
      fromEvent( this.arrows.last.nativeElement, "click")
    )
    .pipe(
      map( async(e: {target: HTMLElement}) => {

        function getProperElement(element: HTMLElement): Promise<{target: HTMLElement}>
        {
          return new Promise(async (resolve) => {

            if(element.hasAttribute("data-id")) return resolve({target: element});
            resolve(await getProperElement(element.parentElement));
          });
        }

        return await getProperElement(e.target);
      })
    )
    .subscribe((e: Promise<{target: HTMLElement}>) => {
      e.then((result: {target: HTMLElement}) => {
        this.homeService.slider( Number(result.target.getAttribute("data-id")), true )
      })
     
    })
  }

  handleResize(event) {
    this.homeService.setSizes(this.elements);
  }
}
