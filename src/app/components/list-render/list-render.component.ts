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
    this.animals = this.animals.filter((a) => a.name !== animal.name);
    this.listService.remove(animal.id).subscribe();
  }

  createAnimal(
    animalName: Animal['name'],
    animalType: Animal['type'],
    animalAge: Animal['age']
  ) {
    const newAnimal: Animal = {
      age: animalAge,
      name: animalName,
      type: animalType,
      id: this.animals.length + 1,
    };

    this.animals = this.listService.add(this.animals, newAnimal);
    this.animalName = '';
    this.animalType = '';
    this.animalAge = 0;
  }

  getAnimals() {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
