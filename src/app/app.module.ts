import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule} from '@angular/material/icon';
import { HomeModule } from './home/home.module';

import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

import { provideClientHydration } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HomeModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
