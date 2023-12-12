import { Injectable } from '@angular/core';
import { data } from './paticularDetails';

import gsap from 'gsap';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private time;
  private flag: boolean = false;

  gsapDetails(content: HTMLElement)
  {

    Array.from(content.getElementsByClassName("properties"))
    .forEach((item: HTMLElement, id: number) => {
      gsap.fromTo(item,
      {
        y: "-=30px",
        opacity: 0
      },
      {
        y: 0,
        opacity: 1
      })
      .delay(id + 1);
    });
    
  }

  last;
  force: boolean = false;

  showProperties(this, click): void
  {

    const detailsService = this.detailsService;

    if(click && typeof click == "boolean")
    {
      detailsService.flag = true;
      detailsService.force = true;

      show.call(this);
      return;
    };

    if(detailsService.time) return;

    function show(): void
    {
      if(!detailsService.flag) return;
      this.button.nativeElement.style.opacity = 0;

      if(!click) setTimeout(() => {
       
        detailsService.flag = true;
      }, 1200);

      this.cover.nativeElement.style.opacity = "0";
      this.folder.nativeElement.style.overflow = "visible";

      this.folder.nativeElement.style.maxHeight = "none";
      this.folder.nativeElement.style.height = "auto";

      detailsService.flag = false;
      this.properties = data[this.details.id];

      this.button.nativeElement.style.display = "none";

      this.changeDetRef.detectChanges();
      detailsService.gsapDetails(this.content.nativeElement);

      detailsService.force = false;
    }

    if(detailsService.force) return;

    detailsService.flag = true;
    detailsService.time = setTimeout(show.bind(this), 1250);
  };

  leaveFromButton(this)
  {
    this.detailsService.flag = false;
    clearTimeout(this.detailsService.time);

    this.detailsService.time = undefined;
  }
}