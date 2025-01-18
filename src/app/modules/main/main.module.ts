import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  exports: [
    MainComponent,
    HomeComponent,
    AboutComponent
  ]
})

export class MainModule { }
