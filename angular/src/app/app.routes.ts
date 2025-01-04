import { Routes } from '@angular/router';

export const routes: Routes = [
      {
            path: '',
            loadComponent: () => import('../app/Components/sign-in/sign-in.component').then(m => m.SignInComponent),
            pathMatch: 'full'
      }
];
