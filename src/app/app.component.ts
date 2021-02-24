import { Component } from '@angular/core';
import { AnswersService } from './answers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Funnel';
  constructor(public answers: AnswersService) {}
}
