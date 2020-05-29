import { Component, OnInit } from '@angular/core';

import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { iMovies } from '../../model/iMovies.interface'; 
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {
  results: Observable<iMovies>;
  data: string;
  loading: any;
  private apiKey: string = '6c277a80';
  private url: string='';
  typeMovie: string = 'series';
  error: string;
  term: string= '';
  type: string= 'series';
  title: string = '';
  films: Observable<iMovies>;

  constructor(public movieService:MovieService, private menu: MenuController,private http: HttpClient, public loadingController: LoadingController) {
    this.data = '';
    this.error = '';
   }

  ngOnInit() {
    
  }
  


  searchChanged(): void {
    this.results= this.movieService.searchMovies(this.term, this.type);
  }

  onlyMovies(): void {
    this.films= this.movieService.getMovies(this.typeMovie);
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  

  async ionViewWillEnter() {
    // Present a loading controller until the data is loaded
await this.presentLoading();
    // Load the data
    this.getMovies()
    .pipe(
        finalize(async () => {
          // Hide the loading spinner on success or error
          await this.loading.dismiss();
        })
    )
    .subscribe(
        data => {
          // Set the data to display in the template
          this.data = JSON.stringify(data);
        },
        err => {
          // Set the error information to display in the template
          this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
        }
    );
}
  async presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
        message: 'Loading...'
    });
    // Present the loading controller
  await this.loading.present();
}
  getMovies(){
    this.url = `https://www.omdbapi.com/?s=${encodeURI(this.typeMovie)}&apikey=${this.apiKey}`;
    return this.http.get<iMovies>(this.url).pipe(map(films => films))
  }




}