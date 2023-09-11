import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  someText = 'Testing pipes';

  constructor(@Inject(LOCALE_ID) private locale: string) {
    this.locale = 'pt-BR';
  }

  today = new Date();

  myMoney = 30;
}
