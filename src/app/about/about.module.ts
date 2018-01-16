import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router/src/config';
import { RouterModule } from '@angular/router';
import { AboutLayoutComponent } from '../_layout/about-layout/about-layout.component';
import { AboutComponent } from './about.component';
import { HeaderComponent } from '../_layout/about-layout/header/header.component';

const aboutRoutes: Routes = [
  {
    path: '', component: AboutLayoutComponent,
    children: [ { path: '', component: AboutComponent, pathMatch: 'full'} ]
  },
  {
    path: 'me', component: AboutComponent
  }  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(aboutRoutes)
  ],
  declarations: [AboutLayoutComponent, AboutComponent, HeaderComponent]
})
export class AboutModule { }

