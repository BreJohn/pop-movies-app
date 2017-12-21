import {
  Component,Output
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import {
  MoviesComponent
} from './movies/movies.component';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
    
    query: string = '';
    onMovieSearch(query:HTMLInputElement){
        this.query = query.value;
    }
}
