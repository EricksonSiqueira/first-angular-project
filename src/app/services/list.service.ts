import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  remove(animals: Animal[], animalToRemove: Animal) {
    return animals.filter((animal) => animal.name !== animalToRemove.name);
  }
  add(animals: Animal[], animal: Animal) {
    return [...animals, animal];
  }
}
