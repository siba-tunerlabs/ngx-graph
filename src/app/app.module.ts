import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import {NgxChartsModule } from '@swimlane/ngx-charts'
import { CommonModule } from '@angular/common';
import {MatMenuModule, MatDialogModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxGraphModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    CommonModule,
    MatMenuModule,
    MatDialogModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
