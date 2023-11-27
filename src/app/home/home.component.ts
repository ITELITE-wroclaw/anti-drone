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
    },
    1: {
      header: 'ADAS 2.1 O',
      img_num: '2',
    },
    2: {
      header: 'ADAS 1.1 D',
      img_num: '3',
    },
    3: {
      header: 'ADAS 2.1 D',
      img_num: '4',
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
