import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // global para uso de servicios
    BrowserAnimationsModule,
    AppRoutingModule // Paso 4. Importar rutas 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
