import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css'],
})
export class IfRenderComponent {
  @Input() name!: string;

  canShow: boolean = true;
}
