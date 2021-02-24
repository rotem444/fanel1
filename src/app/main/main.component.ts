import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private answers: AnswersService) {}

  ngOnInit(): void {
    let { fields } = this.answers;
    fields.food = fields.sport = fields.team = '';
  }
}
