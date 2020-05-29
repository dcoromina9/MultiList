import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { iMovies } from '../../model/iMovies.interface'; 
import { MenuController } from '@ionic/angular';
import { User } from 'src/app/shared/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user:User;
  results: Observable<iMovies>;
  term: string= '';
  type: string= '';



  constructor(private movieService:MovieService, private menu: MenuController) { 

  }

  ngOnInit() {
/*     this.getUsers(); */
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

/*   getUser(): void{
    const id = this.route.snapshot.paramMap.get('id')
    this.userService.getUser(id).subscribe(user => this.user = user)
  }

  getUsers(){
    this.users = this.userService.getUsers();
    
  } */

  


}

