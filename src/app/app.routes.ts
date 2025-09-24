import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignUpComponent)
  },
    {
    path: "user",
    loadComponent: () => import('./pages/user/user.component').then(m => m.UserComponent),
    canActivate: [AuthGuard]
  }
];
