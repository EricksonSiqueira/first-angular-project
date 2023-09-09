import { Component, OnInit } from '@angular/core';

type ICar = {
  modelName: string;
  year: number;
};

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  title = 'First Component title'; // by inference
  number: number = 1; // explicit typed
  car: ICar = {
    modelName: 'Ford',
    year: 2020,
  };

  constructor() {}

  ngOnInit(): void {}
}
