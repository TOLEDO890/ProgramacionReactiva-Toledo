import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiurl = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) { }
  getRandomPersonaje() {
    const randomid = Math.floor(Math.random() * 826) + 1;
    return this.http.get<any>(`${this.apiurl}/${randomid}`);

  }
}
