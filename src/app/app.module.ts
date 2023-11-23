import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule} from '@angular/material/icon';
import { HomeModule } from '@app/home/home.module';

import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    MatIconModule,
    HomeModule,
    HttpClientModule,
    NgOptimizedImage,
    NgbModule,
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
