import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private movie: Movie;



  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.movie = new Movie();

  }

  addMovie(){
      console.log(this.movie);
  }

}



