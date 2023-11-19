import { Component } from '@angular/core';
import { Animal } from '../../interfaces/Animal';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  animals:Animal[] = [
    { name: "Turca", type: 'Dog', age: 8 },
    { name: "Tom", type: "Cat", age: 4 },
    { name: "Frida", type: "Dog", age: 5 },
    { name: "Bob", type: "Horse", age: 1 }
  ]

  animalDetails = '';

  constructor(private listService: ListService) {

  }

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal)
  }


  showAge(animal: Animal) {
    if(animal.age === 1) {
      this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano. `

    } else {
      this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos. `
    }
  }
  
}
