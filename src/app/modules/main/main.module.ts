import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { FooterComponent } from './content/footer/footer.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent
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
    FooterComponent
  ]
})

export class MainModule { }
