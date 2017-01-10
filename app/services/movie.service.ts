import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService{
  apikey: string;

  constructor(private _jsonp:Jsonp){
    this.apikey = 'cca95e8d0d5bcb4c40e7ad20ad0ac2a2';
    console.log('MovieService Initialized...');
  }

  getPopular(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apikey)
      .map(res => res.json());
  }

  getInTheaters(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-01-01&primary_release_date.lte=2017-01-09&api_key='+this.apikey)
      .map(res => res.json());
  }

  searchMovies(searchStr: string) {
    console.log(searchStr);
    return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + searchStr + '&sort_by=popularity.desc&api_key='+this.apikey)
      .map(res => res.json());
  }
}
