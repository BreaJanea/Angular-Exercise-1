import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mad-libs';
  private _noun: string = null;
  public get noun(): string {
    return this._noun;
  }
  public set noun(value: string) {
    this._noun = value;
  }
  adverb: string = 'adverb';
}
