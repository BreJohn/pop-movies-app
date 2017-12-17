import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesService } from './movies.service';
import { Routes,RouterModule } from '@angular/router';

const appRoutes : Routes = [
    {path:'',redirectTo: '/movies/1', pathMatch: 'full'},
    {path:'movies/:page',component: MoviesComponent, children:
     [  
      {path:':id',component: MovieDetailsComponent}
    ]},
    {path:'movies',redirectTo: '/movies/1'},
    
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
