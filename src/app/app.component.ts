import {
  Component, Output, EventEmitter
} from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import {
  MoviesComponent
} from './movies/movies.component';
import 'rxjs/add/operator/map';
import {
  MoviesService
} from './movies.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  constructor(private movService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  onMovieSearch(query: HTMLInputElement) {
    this.movService.query = query.value;
    this.router.navigate(['/movies',1,'search', query.value]);
      
  }
}
