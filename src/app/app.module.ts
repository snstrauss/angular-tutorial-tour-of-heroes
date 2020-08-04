import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { Capitalize } from './pipes/capitalize.pipe';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

/**
 * this is a definition of an Angular module.
 * here we find all sorts of declarations needed for the app:
 *
 * declerations:
 * the components/pipes that are the app
 *
 * imports:
 * different modules used in this module
 *
 * providers:
 * this is a list of all the known providers in the app.
 * HttpClientModule is used as a provider in heroes service
 *
 * bootstrap:
 * the entry point component for the app
 */
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    Capitalize,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
