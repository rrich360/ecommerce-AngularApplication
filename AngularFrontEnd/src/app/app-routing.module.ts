import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login-page/login-page.module').then((m) => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./home-page/home-page.module').then((m) => m.HomePageModule) },
  { path: 'subscribers', loadChildren: () => import('./subscribers-page/subscribers.module').then((m) => m.SubscribersModule) },
  { path: '', loadChildren: () => import('./login-page/login-page.module').then((m) => m.LoginPageModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

