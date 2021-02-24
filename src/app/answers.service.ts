import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AnswersService implements CanActivate {
  fields = {
    food: '',
    sport: '',
    team: '',
  };

  previousVideoId: string = '';

  changeAnswer({ name, value }: HTMLInputElement) {
    this.fields[name] = value;
  }

  constructor(private http: HttpClient) {}

  get hasResult() {
    return Object.values(this.fields).includes('');
  }

  canActivate(): boolean {
    return !this.hasResult;
  }

  getFromYouTube(): Observable<any> {
    //The key I got from YouTue api
    const API_KEY = 'AIzaSyD6v08hACQTaFzc4J1d3JGQ5-YCH9DXgdk';
    //encodeURIComponent use to ensure valide url
    const FOOD = encodeURIComponent(this.fields.food);
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${FOOD}&maxResults=10`;
    return this.http.get<any>(URL);
  }
}
