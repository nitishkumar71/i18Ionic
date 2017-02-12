import { Injectable } from '@angular/core';

@Injectable()
export class AppLanguages {
  private languages: String[];
  constructor() {
    this.languages = ['en', 'hi'];
  }

  public getLanguages(): String[] {
    return this.languages;
  }
}
