import { Component, OnInit, Input } from '@angular/core';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  fields: object;
  @Input('displayEmoji') displayEmoji;
  constructor(answers: AnswersService) {
    this.fields = answers.fields;
  }
  get emoji() {
    let answersLen = Object.values(this.fields).reduce(
      (ans1, ans2) => ans1 + ans2.length,
      0
    );
    /* The test for 'answersLen === 1' is not necessary, the minimum number of character is higher than 1 but I wanted to do the test we usually do a test for a prime number */
    if (answersLen === 1) return 'cry';
    for (let n = 2; n < answersLen; n++) {
      if (!(answersLen % n)) return 'cry';
    }
    return 'smiley';
  }
  get charLen() {
    let vals = Object.values(this.fields);
    return vals.reduce((ans1, ans2) => ans1 + ans2.length, 0);
  }

  ngOnInit(): void {}
}
