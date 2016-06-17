import { Component } from '@angular/core';
import { Movie }  from './service/movie';
import { Genre }  from './service/genre';
import { MovieService } from './service/movie.service'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.tpl.html',
  providers: [MovieService]
})
export class AppComponent {

	errorMessage: string;
	movies: Movie[];
	newMovie: Movie;
	mode = 'Observable';

	constructor (private movieService: MovieService) {}
	 
	 
	displayAllMovies() {
		this.movieService.getAllMovies()
                     .subscribe(
                       movies => this.movies = movies,
                       error =>  this.errorMessage = <any>error);
	}
	
	addMovie (name: string, rating:string, genre:string) {
		if (!name) {
			this.errorMessage = "Name is mandatory";
			return; 
		}
		let movie = new Movie(null, name, Number(rating), [new Genre(genre)]);
		this.movieService.addMovies([movie])
						 .subscribe(
						   newMovie => this.newMovie = newMovie,
						   error =>  this.errorMessage = <any>error);
	}
	
}