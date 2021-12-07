import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';

// configuracion rutas hijas
const routes: Routes = [
  {
    // solo se configura el lazylaoding y no hay necesidad de hacer la configuracion de heroes-routing.module.ts 
    // ya que la ruta padre no existe o es un componente 'invisible'
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },

      {
        path: 'registro',
        component: RegistroComponent
      },

      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
