"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var movie_1 = require('./service/movie');
var genre_1 = require('./service/genre');
var movie_service_1 = require('./service/movie.service');
var AppComponent = (function () {
    function AppComponent(movieService) {
        this.movieService = movieService;
        this.mode = 'Observable';
    }
    AppComponent.prototype.displayAllMovies = function () {
        var _this = this;
        this.movieService.getAllMovies()
            .subscribe(function (movies) { return _this.movies = movies; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.addMovie = function (name, rating, genre) {
        var _this = this;
        if (!name) {
            this.errorMessage = "Name is mandatory";
            return;
        }
        var movie = new movie_1.Movie(null, name, Number(rating), [new genre_1.Genre(genre)]);
        this.movieService.addMovies([movie])
            .subscribe(function (newMovie) { return _this.newMovie = newMovie; }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.tpl.html',
            providers: [movie_service_1.MovieService]
        }), 
        __metadata('design:paramtypes', [movie_service_1.MovieService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map