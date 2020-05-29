import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { User } from './../shared/user'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userCollection: AngularFirestoreCollection<User>;
userDoc: AngularFirestoreDocument<User>;

  constructor(private afs: AngularFirestore) { }

  getUsers(){
    this.userCollection = this.afs.collection('users')
    return this.userCollection.valueChanges()
  }

  getUser(id: string){
    this.userDoc = this.afs.doc<User>(`users/${id}`)
    return this.userDoc.valueChanges();
   }
   
}
