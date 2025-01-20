import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { TripItenaryComponent } from './content/trip-itenary/trip-itenary.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    TripItenaryComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  exports: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    TripItenaryComponent
  ]
})

export class MainModule { }
