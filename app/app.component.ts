import { Component } from '@angular/core';
import { Movie }              from './service/movie';
import { MovieService } from './service/movie.service'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.tpl.html',
  providers: [MovieService]
})
export class AppComponent {

	errorMessage: string;
	movies: Movie[];
	mode = 'Observable';

	constructor (private movieService: MovieService) {}
	 
	 
	displayAllMovies() {
		this.movieService.getAllMovies()
                     .subscribe(
                       movies => this.movies = movies,
                       error =>  this.errorMessage = <any>error);
	}
	
}