import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListNotePipe} from './list-note.pipe';
import {ListActiveDirective} from './list-active.directive';
import {ListComponent} from './list/list.component';
import {VisualiseComponent} from './visualise/visualise.component';
import {AccueilComponent} from '../accueil/accueil.component';
import { AddComponent } from './add/add.component';
import { FormsModule} from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';



import {MovieService} from './movie.service';



const routes: Routes = [
    {path : 'movie', component: ListComponent},
    //{path : 'movie/add', component: MovieModule},
    {path : 'movie/:id', component: VisualiseComponent},



];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild( routes ), FormsModule
  ],
  declarations: [
      ListComponent,
      ListActiveDirective,
      ListNotePipe,
      VisualiseComponent,
      AddComponent

  ],
    providers: [MovieService],
})

export class MovieModule {}
