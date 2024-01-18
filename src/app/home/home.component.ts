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
  styleUrls: ['./home.component.scss']
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
    if (this.elements) this.homeService.setSizes(this.container._results.map((e) => e.nativeElement));
  }
}