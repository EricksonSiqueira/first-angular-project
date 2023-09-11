import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent {
  @Input() email = ''; // init here
  @Input() name!: string; // say that this will be initialized later
}
