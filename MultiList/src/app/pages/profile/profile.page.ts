import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { iMovies } from '../../model/iMovies.interface'; 
import { MenuController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Profile } from '../../model/profile'; 
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../../services/user.service';
import { User } from 'src/app/shared/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  users:Observable<any[]>;
  user:User;
  results: Observable<iMovies>;
  term: string= '';
  type: string= '';
  userData: AngularFireObject<Profile>


  constructor(private movieService:MovieService, private menu: MenuController, private route: ActivatedRoute, private userService : UserService
    ) { 

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

