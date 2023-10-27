import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Input } from "@angular/core";

import { gsap } from 'gsap/gsap-core';
import { DeviceDetectorService } from 'ngx-device-detector';

import { imagesPath } from '@app/path';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['../../details.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements AfterViewInit{
  
  constructor(private deviceDet: DeviceDetectorService){}

  @Input() detailsChild;
  @Output() toParent: EventEmitter<object> = new EventEmitter<object>();

  @ViewChild("detailsContainer")
  detailsContainer: ElementRef;

  protected imagesPath: string = imagesPath + "home/content/"+ this.detectDevice() +"content_";

  ngAfterViewInit(): void
  {
    const properties: HTMLCollection = this.detailsContainer.nativeElement.getElementsByClassName("properties");

    Array.from(properties)
    .forEach((e, id) => {
      gsap.fromTo(e, {opacity: 0}, {opacity: 1}).delay(id + 1)
    });

  }

  hideDetails(): void
  {
    this.toParent.emit(null);
  }

  protected isNumber(width): boolean
  {
    return typeof width == "number";
  }

  isString(data): boolean
  {
    return typeof data == "string";
  }

  private detectDevice(): string
  {
    return this.deviceDet.isMobile()? "mobile/": "";
  }

}
