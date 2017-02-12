import { Component } from '@angular/core';
import { TranslateService } from "ng2-translate";

import { NavController } from 'ionic-angular';
import { AppLanguages } from '../../providers/app-languages';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private languages: Array<String>;
  constructor(public navCtrl: NavController, public translate: TranslateService
  , public appLanguages: AppLanguages) {

    this.languages = appLanguages.getLanguages();
  }

}
