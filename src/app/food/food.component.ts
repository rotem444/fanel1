import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  constructor(public answers: AnswersService) {}

  ngOnInit(): void {}
}
