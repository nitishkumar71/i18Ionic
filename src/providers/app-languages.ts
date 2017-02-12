import { Injectable } from '@angular/core';

@Injectable()
export class AppLanguages {
  private languages: Array<String>;
  constructor() {
    this.languages = ['en', 'hi'];
  }

  public getLanguages(): Array<String> {
    return this.languages;
  }
}
