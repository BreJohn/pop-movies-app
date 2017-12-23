import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: String;
  id: number;
  page: number;
  query: string;
  imgUrl = 'https://image.tmdb.org/t/p/w300';
  constructor(private movService: MoviesService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.movie = null;
    this.page = this.movService.page;
    this.query = this.movService.query;
      
    this.route.params
      .subscribe(
      (params: Params) => {
         console.log(this.query);
        if (this.query == null) {
          this.id = +params['id'];    
          this.movService.getMovies(this.page).subscribe(
            (movies) => {
              this.movie = movies.results[this.id];
            }
          );
        }
        else if (this.query) {
            
          this.id = +params['id'];    
          this.movService.getQuery(this.page, this.query)
            .subscribe(
            (movies) => {
              this.movie = movies.results[this.id];
            }
            );

        }
      }
      );

  }




}
