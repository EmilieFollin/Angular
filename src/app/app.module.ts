import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { ErrorComponent } from './error/error.component';

import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';

import {MovieModule } from './movie/movie.module';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ErrorComponent,
  ],

  imports: [
      BrowserModule, MovieModule, AppRoutingModule, RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
