import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout'; // estilos de flex-loyout 
import { MaterialModule } from '../material/material.module'; // modulo de componentes de angular material 


// componentes 
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule, // flex-layout https://github.com/angular/flex-layout https://www.npmjs.com/package/@angular/flex-layout 
    HeroesRoutingModule, // rutas hijas 
    MaterialModule
  ]
})
export class HeroesModule { }
