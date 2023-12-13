import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { generalDetails } from './detailsTypes';
import { HomeService } from './home.service';

import { DeviceDetectorService } from 'ngx-device-detector';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  template: `<header>
                <h1>ANTI DRONE SOLUTIONS</h1>
             </header>`
})
export class HomeComponent implements AfterViewInit {
  constructor(
    public homeService: HomeService,
    private deviceDet: DeviceDetectorService,
    private metaTagService: Meta
  ) {}

  private elements: HTMLCollectionOf<Element> = document.getElementsByClassName('container-fluid');
  protected images: Blob[] = [];

  ngOnInit(): void {
    this.metaTagService.addTags([
      {name: "keywords", content: "anti drone antennas, anti drone, anti drone antenna, counter drone antennas, drone jammers antennas, counter uav antennas, ant uav antennas, drone dome, airspace security, drone protection"},
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Łukasz Trzepadłek' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'UTF-8' }
    ])
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
  };

  @ViewChild('machine_line')
  machine_line: ElementRef;

  @ViewChild('write_line')
  writeLine: ElementRef;

  async ngAfterViewInit(): Promise<void> {
    this.homeService.init(this.writeLine, this.elements);
  }

  handleResize(event) {
    this.homeService.setSizes(this.elements);
  }
}
