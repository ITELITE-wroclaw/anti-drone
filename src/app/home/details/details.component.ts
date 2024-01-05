import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';

import { imagesPath } from '@app/path';
import { generalDetails, particularDetails } from '../detailsTypes';

import { DetailsService } from './details.service';
import { DeviceDetectorService } from 'ngx-device-detector';

import { NgForm } from '@angular/forms';
import { object, string } from 'zod';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['../../details.scss'],
  template: `<h2 rel="canonical" class="background_header">Antennas</h2>`
})
export class DetailsComponent implements AfterViewInit{

  constructor(
    private changeDetRef: ChangeDetectorRef,
    private detailsService: DetailsService,
    private deviceDet: DeviceDetectorService,
    private renderer: Renderer2
  ){}

  protected img;
  sizes: number[][] = [[440, 478], [440, 478], [430, 347], [390, 314]];

  @Input() details :{value: generalDetails, id: number} | null = null;
  @Input() set images (img)
  {
    this.img = img;
  };

  @Output() refreshDetailsComponentSize: boolean;
  
  protected imagesPath: string = imagesPath + "home/content/"+ this.detectDevice() +"content_";
  protected properties: particularDetails;

  private detectDevice(): string
  {
    return this.deviceDet.isMobile()? "mobile/": "";
  }

  @ViewChild("content")
  content: ElementRef;

  @ViewChild("learnMore")
  button: ElementRef;

  @ViewChild("cover")
  cover: ElementRef;

  @ViewChild("folder")
  folder: ElementRef;

  public ngAfterViewInit(): void {

    fromEvent(this.button.nativeElement, "mouseleave")
    .subscribe(this.detailsService.leaveFromButton.bind(this));

    fromEvent(this.button.nativeElement, "mouseenter")
    .subscribe(this.detailsService.showProperties.bind(this));

    fromEvent(this.button.nativeElement, "click")
    .subscribe(this.detailsService.showProperties.bind(this, true));
  }

  hideDetails(): void
  {
    this.properties = null;

    const button = this.button.nativeElement;
    const folder = this.folder.nativeElement;
    const cover = this.cover.nativeElement;

    this.renderer.setStyle(button, "display", "block");
    this.renderer.setStyle(folder, "overflow", "hidden");

    this.renderer.setStyle(cover, "opacity", "1");
    this.renderer.setStyle(folder, "maxHeight", "450px");

    this.renderer.setStyle(folder, "height", "none");
    this.renderer.setStyle(button, "opacity", "1");

    this.changeDetRef.detectChanges();
  }
  
  protected isType(data, type: string): boolean
  {
    return typeof data == type;
  }

  public sendMail(mailForm: NgForm, area: HTMLTextAreaElement)
  {
    let requires = object({
      name: string().min(3),
      email: string().email()
    });

    const result: any = requires.safeParse(mailForm.value);
    result.success? this.detailsService.customAntennaInquiry(mailForm.value, area): alert('Add name/company name and contact email');
  }

}