import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  getPais(nombre: string): Observable<any> {
    return this.http.get<any[]>(`https://restcountries.com/v3.1/name/${nombre}`);
  }
}
