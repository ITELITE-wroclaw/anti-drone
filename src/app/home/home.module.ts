import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeComponent } from './home.component';
import { DetailsComponent } from './details/details.component';

import { MatIconModule } from '@angular/material/icon';
import { NgxResizeObserverModule } from 'ngx-resize-observer';

import { HomeService } from './home.service';
import { FormGroup, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgxResizeObserverModule,
    NgOptimizedImage,
    FormsModule
  ],
  exports: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule { }
