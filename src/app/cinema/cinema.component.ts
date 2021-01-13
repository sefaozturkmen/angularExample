import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css'],
  providers: [CinemaService]
})
export class CinemaComponent implements OnInit {



  constructor(private cinemaService: CinemaService) { }

  imgUrl = 'https://image.tmdb.org/t/p/w500'
  movieList = []

  ngOnInit(): void { 
    this.cinemaService.getCinema().subscribe(data=>{
      this.movieList = data.results;
    })
  }


}
