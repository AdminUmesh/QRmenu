import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [authGuard] },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
];


//canActivate is a Route Guard in Angular.It Protects entry into a route “Can the user enter this page?”
//It decides whether a user is allowed to access a specific route (page) or not.
//Create Using 'ng generate guard auth'