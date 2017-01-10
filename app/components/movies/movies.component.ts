import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  moduleId: module.id,
  selector: 'movies',
  templateUrl: `movies.component.html`,
})
export class MoviesComponent  {
  popularList: Array<Object>;
  theatersList: Array<Object>;
  searchStr: string;
  searchRes: Array<Object>;

  constructor(private __movieService: MovieService) {
    this.__movieService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });

    this.__movieService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    })
  }

  searchMovies() {
    this.__movieService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }
}
