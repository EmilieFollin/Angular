import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './movie/list/list.component';
import {BrowserModule} from '@angular/platform-browser';
import {AccueilComponent} from './accueil/accueil.component';
import {VisualiseComponent} from './movie/visualise/visualise.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
    {path : 'accueil', component: AccueilComponent},
    {path : '**', component: ErrorComponent}

];

@NgModule({
  imports: [
    CommonModule,
      BrowserModule, RouterModule.forRoot( routes )
  ],
  declarations: []
})
export class AppRoutingModule { }
