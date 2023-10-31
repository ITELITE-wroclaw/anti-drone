
import {  Component } from '@angular/core';
import { imagesPath } from '../path';

import { Router } from '@angular/router';
import { data } from '../home/details/paticularDetails';

import { particularDetails } from '../home/detailsTypes';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss', '../../../node_modules/bootstrap/scss/bootstrap.scss'],
})
export class ProductsComponent {

  constructor(private router: Router) { }

  domesticPath = imagesPath + "home/content"
  detailsParent: particularDetails;

  navigate() {
    this.router.navigate(["/contact"]);
  }

  hoverElement: HTMLElement;

  showProductDetails(e: Event | any) {
    if (!e.target['classList'].contains("cover")) return;
    const id = e.target.getAttribute("data-id");

    const newData = Object.assign({}, data[`${id}`]);
    newData.id = Number(id) + 1;

    this.detailsParent = newData;
  }

  // css animation
  moveElement(e: Event) {
    if (!e.target['classList'].contains('cover')) {
      if (this.hoverElement) this.hoverElement.classList.remove('raise');
      return;
    }

    if (this.hoverElement) this.hoverElement.classList.remove('raise');

    e.target['parentElement'].classList.add('raise');
    this.hoverElement = e.target['parentElement'];
  }

  hideDetails() {
    this.detailsParent = null;
  }
}
