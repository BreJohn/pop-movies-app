import {
  Injectable,
  EventEmitter
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import {
  Observable
} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class MoviesService {
    
  constructor(private http: Http) { }
  
  page: number;    
  getMovies(page: number): Observable<any> {

    return this.http.get('https://api.themoviedb.org/3/movie/popular?page=' + page + '&language=en-US&api_key=9198fa6d9a9713bc6b03ee9582525917').
      map(
      (response: Response) => {
        const data = response.json();
        this.page = page;
        return data;
      }
      );
  }
}
