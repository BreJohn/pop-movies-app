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
  imgUrl = 'https://image.tmdb.org/t/p/w300';
  constructor(private movService: MoviesService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.movie = null;
    this.page = this.movService.page;
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.movService.getMovies(this.page).subscribe(
          (res) => {
            this.movie = res.results[this.id];
          }
        );

      }
      );

  }




}
