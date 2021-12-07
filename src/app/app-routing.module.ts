import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

// Paso 1. Definicion
const routes: Routes = [

  // rutas hijas - lazyloading
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) // MODULO RUTAS HIJAS 
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404' // redireccionar al path 404
  }
]


@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes) // Paso 2. 
  ],
  exports: [
    RouterModule // Paso 3.
  ]
})
export class AppRoutingModule { }
