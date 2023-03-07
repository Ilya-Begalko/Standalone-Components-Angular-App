import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContainerLayoutComponent } from './components/container-layout/container-layout.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContainerLayoutComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
