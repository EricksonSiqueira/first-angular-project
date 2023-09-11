import { Component } from '@angular/core';
import { Animal } from 'src/app/interfaces/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals: Animal[] = [
    { name: 'Tapioca', type: 'cat', age: 2 },
    { name: 'Sushi', type: 'dog', age: 3 },
    { name: 'Geraldo', type: 'snake', age: 5 },
  ];
  animalDetails = '';

  constructor(private listService: ListService) {}

  showAge(animal: Animal) {
    this.animalDetails = `${animal.name} is ${animal.age} years old`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal);
  }
}
