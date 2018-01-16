import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeLayoutComponent } from '../_layout/home-layout/home-layout.component';
import { HeaderComponent } from '../_layout/home-layout/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: HomeLayoutComponent,
        children: [{
          path: '', component: HomeComponent, pathMatch: 'full'
        }]
      }
    ])
  ],
  declarations: [HomeLayoutComponent, HeaderComponent, HomeComponent ]
})
export class HomeModule { }
