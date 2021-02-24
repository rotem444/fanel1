import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.scss'],
})
export class SportComponent implements OnInit {
  constructor(public answers: AnswersService) {}

  ngOnInit(): void {}
}
