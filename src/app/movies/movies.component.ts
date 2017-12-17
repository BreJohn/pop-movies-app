import {
  Component,
  OnInit,
  EventEmitter
} from '@angular/core';
import {
  MoviesService
} from '../movies.service';
import {
  Router,
  ActivatedRoute,
  Params
} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  pageCount: number;
  movies: any = {};
  imgUrl = 'https://image.tmdb.org/t/p/w300';

  constructor(private movService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.pageCount = +params['page'];
        this.movService.getMovies(+params['page'])
          .subscribe(
          (movies: any[]) => {
            this.movies = movies;
          }
          );
      }
      );
  }

  onNextPage() {
    const nextPage = +this.route.snapshot.params['page'] + 1;
    this.router.navigate(['movies/', nextPage]);
  }

  onPrevPage() {
    const prevPage = +this.route.snapshot.params['page'] - 1;
    this.router.navigate(['movies/', prevPage]);
  }

}
