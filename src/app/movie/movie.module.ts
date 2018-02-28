import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListNotePipe} from './list-note.pipe';
import {ListActiveDirective} from './list-active.directive';
import {ListComponent} from './list/list.component';
import {VisualiseComponent} from './visualise/visualise.component';
import {AccueilComponent} from '../accueil/accueil.component';

import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {path : 'movie', component: ListComponent},
    {path : 'movie/:id', component: VisualiseComponent},


];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild( routes)

  ],
  declarations: [
      ListComponent,
      ListActiveDirective,
      ListNotePipe,
      VisualiseComponent

  ]
})
export class MovieModule { }
