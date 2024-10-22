import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Importando as rotas

@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideRouter(routes), // Fornecendo as rotas aqui
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
