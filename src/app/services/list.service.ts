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

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) =>animal.name !== a.name);
  }

  getAll():Observable<Animal[]> {

    return this.httpClient.get<Animal[]>(this.endpoint);

  }

}
