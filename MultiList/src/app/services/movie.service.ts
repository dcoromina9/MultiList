import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { iMovies } from '../model/iMovies.interface'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url: string='';
  private apiKey: string = '6c277a80';

  constructor(private http: HttpClient) { }

  searchMovies(title:string, type:string){
    this.url = `https://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    return this.http.get<iMovies>(this.url).pipe(map(results => results['Search']))
  }

  getDetails(id:string){
    return this.http.get<iMovies>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
