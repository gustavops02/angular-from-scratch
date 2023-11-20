import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private endpoint = "http://localhost:3000/animals"

  constructor(private httpClient: HttpClient) { 
    
  }

  remove(id: number) {
    return this.httpClient.delete<Animal>(`${this.endpoint}/${id}`);
  }

  getAll():Observable<Animal[]> {

    return this.httpClient.get<Animal[]>(this.endpoint);

  }

  getItem(id: number): Observable<Animal> {
      return this.httpClient.get<Animal>(`${this.endpoint}/${id}`)
  }

}
