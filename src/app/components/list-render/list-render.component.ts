import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals = [
    { name: 'Tapioca', type: 'cat' },
    { name: 'Sushi', type: 'dog' },
    { name: 'Geraldo', type: 'snake' },
  ];
}
