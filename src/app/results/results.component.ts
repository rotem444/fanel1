import { Component, OnInit } from '@angular/core';
import { AnswersService } from '../answers.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  videoSrc: any = '';

  constructor(
    public answers: AnswersService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.answers.getFromYouTube().subscribe(({ items }) => {
      let len = items?.length;
      if (!len) return;
      /* by this loop i e thet Youtube video at the end should be different each time even if the user enters the same
food. (the bonus) */
      do {
        let rand = (Math.random() * len) | 0;
        //I used 'var' because 'videoId' variable appears outside the do...while scope
        var { videoId } = items[rand].id;
        //The condition len === 1 designed to avoid an infinite loop in case there is only one item
      } while (this.answers.previousVideoId === videoId && len !== 1);
      //Saves the variable in the server for the next time a request is sent
      this.answers.previousVideoId = videoId;
      //sanitizer is required to security, to avoid cross-site Scripting
      this.videoSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${videoId}`
      );
    });
  }
}
