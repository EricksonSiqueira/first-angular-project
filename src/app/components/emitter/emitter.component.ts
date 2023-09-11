import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent {
  number = Math.ceil(Math.random() * 100);

  onChangeNumber() {
    this.number = Math.ceil(Math.random() * 100);
  }
}
