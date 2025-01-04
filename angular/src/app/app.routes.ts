import { Routes } from '@angular/router';

export const routes: Routes = [
      {
            path: '',
            loadComponent: () => import('../app/Components/home/home.component').then(m => m.HomeComponent),
            pathMatch: 'full'
      },
      {
            path: 'sign-up',
            loadComponent: () => import('../app/Components/sign-up/sign-up.component').then(m => m.SignUpComponent),
            pathMatch: 'full'
      },
      {
            path: 'sign-in',
            loadComponent: () => import('../app/Components/sign-in/sign-in.component').then(m => m.SignInComponent),
            pathMatch: 'full'
      },
      {
            path: 'chat-list',
            loadComponent: () => import('../app/Components/chat/chat-list/chat-list.component').then(m => m.ChatListComponent),
            pathMatch: 'full'
      }
];
