import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { ContactLayoutComponent } from '../_layout/contact-layout/contact-layout.component';
import { HeaderComponent } from '../_layout/contact-layout/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: ContactLayoutComponent,
        children: [{
          path: '', component: ContactComponent
        }]
      }
    ])
  ],
  declarations: [ContactLayoutComponent, HeaderComponent, ContactComponent]
})
export class ContactModule { }