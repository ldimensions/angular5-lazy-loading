import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const appRouter: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: 'contact', loadChildren: 'app/contact/contact.module#ContactModule' }
]