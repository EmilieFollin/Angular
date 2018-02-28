import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'movie-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private movies: Array<object>;

  constructor( private movieService: MovieService, private router: Router) { }

  ngOnInit() {

      this.movies = this.movieService.getAll();

    }


  showMovie (titles) {
    alert("vous avez clique sur " + titles);

  }

}
