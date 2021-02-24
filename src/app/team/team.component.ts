import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../answers.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  teamArr = ['Barcelona', 'Real Madrid', 'Juventus', 'Liverpool', 'Chelsea'];
  constructor(public answers: AnswersService) {}

  ngOnInit(): void {}
}
