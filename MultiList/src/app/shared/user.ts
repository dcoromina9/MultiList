import { Injectable } from '@angular/core'
export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
 }

 export class UserService{
     private user: User

     constructor(){
     }

     setUser(user : User){
        this.user = user
     }

     getUID(){
         return this.user.uid
     }
 }