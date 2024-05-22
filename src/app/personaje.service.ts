import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Personaje {
  id: number;
  nombre: string;
  imageurl: string;
}

@Injectable({
  providedIn: 'root',
})
export class PersonajeService {
  constructor(private http: HttpClient) {}

  getpersonaje(search: string): Observable<Personaje[]> {
    const searchUrl = `https://api.com/personaje/${search}`;
    return this.http.get<Personaje[]>(search);
  }
  getpersonajes(): Observable<Personaje[]> {
    const searchUrl = `https://api.com/personaje/$(id)`;
    return this.http.get<Personaje[]>(searchUrl);
  }
}
