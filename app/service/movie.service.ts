import { Injectable } from "@angular/core"
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx'

import { Movie }           from './movie';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class MovieService{
	
	constructor (private http: Http) {}
	
    //private endpoint_url:string = "http://localhost:8080/";
    private endpoint_url:string = "http://backend-rest-springboot.rhel-cdk.10.1.2.2.xip.io/";
	
    getAllMovies(){
        return this.http.get(this.endpoint_url + "movies")
						.map(this.extractData)
						.catch(this.handleError);
    }
	
	addMovies(movies:Movie[]): Observable<Movie> {
		let body = JSON.stringify(movies);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.put(this.endpoint_url + "addMovies", body, options)
						.map(this.extractData)
						.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.content || { };
	}

	private handleError (error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
		error.status ? `${error.status} - ${error.statusText} - ${error.message}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}