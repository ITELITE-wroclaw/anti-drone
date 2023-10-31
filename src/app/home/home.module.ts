import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { DetailsComponent } from './details/details.component';

import { MatIconModule } from '@angular/material/icon';
import { NgxResizeObserverModule } from 'ngx-resize-observer';

import { HomeService } from './home.service';
import { Ng2CacheModule } from 'ng2-cache';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    NgxResizeObserverModule,
    Ng2CacheModule
  ],
  exports: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule { }
