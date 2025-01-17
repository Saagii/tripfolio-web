import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { AdminComponent } from './content/admin/admin.component';
import { ContactUsComponent } from './content/contactUs/contactUs.component';
import { HomeComponent } from './content/home/home.component';

const mainRoutes: Routes = [
  { 
    path: '',
    canActivate: [],
    children : [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'admin', component: AdminComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
