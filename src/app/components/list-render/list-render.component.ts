import { Component } from '@angular/core';
import { Animal } from '../../interfaces/Animal';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  animals:Animal[] = [];

  animalDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) =>animal.name !== a.name); // Feito a exclusão pelo front
    this.listService.remove(animal.id).subscribe(); // Feito a exclusão pelo back-end
  }


  showAge(animal: Animal) {
    if(animal.age === 1) {
      this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano. `

    } else {
      this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos. `
    }
  }
  
  getAnimals():void {

    this.listService.getAll().subscribe((animals) => this.animals = animals);

  }
  
}
