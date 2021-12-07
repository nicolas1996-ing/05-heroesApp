import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';


// configuracion rutas hijas 
// lazyLoading 
const routes: Routes = [
  {
    // Observacion : el path '' direcciona a la ruta padre o principal HomeComponent
    // para que funcionen las rutas hijas es necesario agregrar el <router-outlet> </router-outlet>
    // dentro de home.component.html, con esto ya se renderizan las rutas hijas justo en la posición del router-outlet 
    path: '',
    component: HomeComponent, // ruta padre 
    // ruta hijas
    children: [
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'agregar',
        component: AgregarComponent
      },
      {
        path: 'editar/:id',
        component: AgregarComponent
      },
      {
        path: 'buscar',
        component: BuscarComponent
      },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        component: ListadoComponent
      }
    ]
  }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // config rutas hijas 
  ],
  exports: [
    RouterModule // exportar 
  ]
})
export class HeroesRoutingModule { }
