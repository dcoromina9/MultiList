import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../shared/authentication-service";
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { iMovies } from '../../model/iMovies.interface'; 
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  results: Observable<iMovies>;
  term: string= '';
  type: string= '';

  constructor(private movieService:MovieService, private menu: MenuController) { }

  ngOnInit() {
  }

  searchChanged(): void {
    this.results= this.movieService.searchMovies(this.term, this.type);
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
}
