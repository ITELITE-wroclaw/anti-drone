import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule} from '@angular/material/icon';
import { HomeModule } from '@app/home/home.module';

import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    MatIconModule,
    HomeModule,
    HttpClientModule,
    NgOptimizedImage,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
