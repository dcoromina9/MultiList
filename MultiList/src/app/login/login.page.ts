import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {
    if(this.authService.isLoggedIn){
      this.router.navigate(['profile']); 
    }
  }   
       logIn(email, password) {
        this.authService.SignIn(email.value, password.value)
          .then((res) => {
            if(this.authService.isEmailVerified ) {
              this.router.navigate(['profile']);          
            } else {
              window.alert('Email is not verified')
              return false;
            }
          }).catch((error) => {
            window.alert(error.message)
          })
      }
    
    } 
    
  