import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [];
  animalDetails = '';

  animalName = '';
  animalAge = 0;
  animalType = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  showAge(animal: Animal) {
    this.animalDetails = `${animal.name} is ${animal.age} years old`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal);
  }

  createAnimal(animal: Animal) {
    this.animals = this.listService.add(this.animals, animal);
    this.animalName = '';
    this.animalType = '';
    this.animalAge = 0;
  }

  getAnimals() {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
