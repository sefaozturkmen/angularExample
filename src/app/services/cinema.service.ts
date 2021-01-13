import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  movieUrl='https://api.themoviedb.org/3/movie/top_rated?api_key=7ab603f7fd8c4c10192cd9822304f83c&language=en-US'


  constructor(private http: HttpClient) { }

  getCinema(): Observable<any>{
   return this.http.get<any>(this.movieUrl)
  }
}
